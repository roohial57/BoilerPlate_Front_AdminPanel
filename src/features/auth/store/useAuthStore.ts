import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: false as boolean,
    user: null as null | { id: number; email: string },
  }),
  actions: {
    login(email: string, password: string) {
      // Dummy login
      this.isAuthenticated = true;
      this.user = { id: 1, email };
    },
    logout() {
      this.isAuthenticated = false;
      this.user = null;
    },
  },
});
