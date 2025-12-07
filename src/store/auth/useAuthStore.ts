import { defineStore } from 'pinia';
import type { AuthModel } from '../adapters/authAdapter';

export interface AuthUser {
  id: string;
  username: string;
  fullName?: string;
  roles?: string[];
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: false as boolean,
    user: null as AuthUser | null,
  }),
  actions: {
    login(email: string, password: string) {
      // Dummy login
      this.isAuthenticated = true;
      this.user = { id: 1, email };
    },
    loginWithModel(userModel: AuthModel) {
      // Login using the mapped model from adapter
      this.isAuthenticated = true;
      this.user = {
        id: userModel.id,
        username: userModel.username,
        fullName: userModel.fullName,
        roles: userModel.roles,
      };
    },
    logout() {
      this.isAuthenticated = false;
      this.user = null;
    },
  },
});
