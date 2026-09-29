 import api from './api';

const mbtiService = {
  startTest: async () => {
    return await api('/mbti/start', {
      method: 'POST',
    });
  },

  submitAnswer: async (sessionId, questionId, dimension, answer) => {
    return await api('/mbti/answer', {
      method: 'POST',
      body: JSON.stringify({
        sessionId,
        question: {
          id: Number(questionId), // Ensure it is an integer as per schema
          dimension,
        },
        answer,
      }),
    });
  },
};

export default mbtiService;
