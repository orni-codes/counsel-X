import MBTI_QUESTIONS from './questions';

/**
 * Calculates the MBTI personality type based on user answers.
 * @param {Object} answers - Object with question IDs as keys and 'A' or 'B' as values.
 * @returns {Object} { type: string, scores: Object, confidence: number }
 */
export const calculateMBTI = (answers) => {
  const scores = {
    E: 0, I: 0,
    S: 0, N: 0,
    T: 0, F: 0,
    J: 0, P: 0
  };

  MBTI_QUESTIONS.forEach((q) => {
    const answer = answers[q.id];
    if (answer && q.weight[answer]) {
      scores[q.weight[answer]]++;
    }
  });

  // Calculate the four letters
  const type = [
    scores.E >= scores.I ? 'E' : 'I',
    scores.S >= scores.N ? 'S' : 'N',
    scores.T >= scores.F ? 'T' : 'F',
    scores.J >= scores.P ? 'J' : 'P'
  ].join('');

  // Simple confidence calculation (ratio of the dominant trait)
  // This is a basic implementation for the demo
  const totalQuestions = MBTI_QUESTIONS.length;
  const confidence = Math.round(
    ((scores[type[0]] + scores[type[1]] + scores[type[2]] + scores[type[3]]) / totalQuestions) * 100
  );

  return {
    type,
    scores,
    confidence: Math.min(confidence, 98) // Cap at 98 for realism
  };
};

export default calculateMBTI;
