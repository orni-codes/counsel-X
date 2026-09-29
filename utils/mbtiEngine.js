function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function initScores() {
  return {
    E: 0, I: 0,
    S: 0, N: 0,
    T: 0, F: 0,
    J: 0, P: 0
  };
}

function updateScore(scores, question, answer) {
  const dim = question.dimension;

  if (dim === "EI") answer === "A" ? scores.E++ : scores.I++;
  if (dim === "SN") answer === "A" ? scores.S++ : scores.N++;
  if (dim === "TF") answer === "A" ? scores.T++ : scores.F++;
  if (dim === "JP") answer === "A" ? scores.J++ : scores.P++;

  return scores;
}

function getUncertainty(scores) {
  return {
    EI: Math.abs(scores.E - scores.I),
    SN: Math.abs(scores.S - scores.N),
    TF: Math.abs(scores.T - scores.F),
    JP: Math.abs(scores.J - scores.P)
  };
}

function getNextQuestion(pools, scores , answered) {
  const uncertainty = getUncertainty(scores);

  const sorted = Object.entries(uncertainty)
    .sort((a, b) => a[1] - b[1]);

  for (let [dim] of sorted) {
    const available = pools[dim].filter(q => !answered.includes(q.id));
    if (available.length > 0) {
      return available[0];
    }
    if (pools[dim].length > 0) {
      return pools[dim].pop();
    }
  }

  return null;
}

function getConfidence(a, b) {
  const total = a + b;
  if (total === 0) return 50;
  return Math.round((Math.max(a, b) / total) * 100);
}

function getResult(scores) {
  return {
    type:
      (scores.E > scores.I ? "E" : "I") +
      (scores.S > scores.N ? "S" : "N") +
      (scores.T > scores.F ? "T" : "F") +
      (scores.J > scores.P ? "J" : "P"),

    confidence: {
      EI: getConfidence(scores.E, scores.I),
      SN: getConfidence(scores.S, scores.N),
      TF: getConfidence(scores.T, scores.F),
      JP: getConfidence(scores.J, scores.P)
    }
  };
}

function shouldStop(scores) {
  const conf = getResult(scores).confidence;

  return (
    conf.EI > 75 &&
    conf.SN > 75 &&
    conf.TF > 75 &&
    conf.JP > 75
  );
}

module.exports = {
  shuffle,
  initScores,
  updateScore,
  getNextQuestion,
  getResult,
  shouldStop
};