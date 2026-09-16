import { create } from 'zustand';

export const useAuthStore = create((set) => ({
  // State
  user: JSON.parse(localStorage.getItem('user')) || null,
  isAuthenticated: !!localStorage.getItem('user'),

  // Login
  login: (email, password) => {
    // Temporary: validate locally (後で ще идва от API)
    if (email && password) {
      const user = {
        id: Math.random().toString(36).substr(2, 9),
        email,
        username: email.split('@')[0],
        avatar: `https://i.pravatar.cc/64?img=${Math.floor(Math.random() * 70)}`,
        joinedDate: new Date().toLocaleDateString(),
      };
      localStorage.setItem('user', JSON.stringify(user));
      set({ user, isAuthenticated: true });
      return true;
    }
    return false;
  },

  // Register
  register: (email, password, username) => {
    if (email && password && username) {
      const user = {
        id: Math.random().toString(36).substr(2, 9),
        email,
        username,
        avatar: `https://i.pravatar.cc/64?img=${Math.floor(Math.random() * 70)}`,
        joinedDate: new Date().toLocaleDateString(),
      };
      localStorage.setItem('user', JSON.stringify(user));
      set({ user, isAuthenticated: true });
      return true;
    }
    return false;
  },

  // Logout
  logout: () => {
    localStorage.removeItem('user');
    set({ user: null, isAuthenticated: false });
  },
}));