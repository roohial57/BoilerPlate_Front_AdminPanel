import { defineStore } from 'pinia';

export interface User {
  id: number;
  name: string;
  email: string;
}

export const useUserStore = defineStore('user', {
  state: () => ({
    users: [] as User[],
  }),
  actions: {
    setUsers(users: User[]) {
      this.users = users;
    },
  },
});
