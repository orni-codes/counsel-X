import api from './api';

const authService = {
  signup: async (userData) => {
    return await api('/auth/signup', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  },

  login: async (credentials) => {
    return await api('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
  },

  googleLogin: () => {
    window.location.href = 'https://counsel-x.onrender.com/api/auth/google';
  },

  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },
};

export default authService;
