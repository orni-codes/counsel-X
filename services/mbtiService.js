const questions = require("../data/questions");
const {
  shuffle,
  initScores,
  updateScore,
  getNextQuestion,
  getResult,
  shouldStop
} = require("../utils/mbtiEngine");

function createPools() {
  return {
    EI: shuffle(questions.filter(q => q.dimension === "EI")),
    SN: shuffle(questions.filter(q => q.dimension === "SN")),
    TF: shuffle(questions.filter(q => q.dimension === "TF")),
    JP: shuffle(questions.filter(q => q.dimension === "JP"))
  };
}

module.exports = {
  startTest() {
    return {
      scores: initScores(),
      pools: createPools(),
      answered: []
    };
  },

  answerQuestion(session, question, answer) {
    session.scores = updateScore(session.scores, question, answer);
    session.answered.push(question.id);

    if (shouldStop(session.scores)) {
      session.completed = true;
      return { done: true, result: getResult(session.scores) };
    }

    const nextQ = getNextQuestion(session.pools,session.scores,session.answered);

    if (!nextQ) {
      session.completed = true;
      return { done: true, result: getResult(session.scores) };
    }

    return { done: false, question: nextQ };
  }
};