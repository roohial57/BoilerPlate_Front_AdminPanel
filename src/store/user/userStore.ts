
import { storeManager } from "../StoreManager";
import { UserService, UserItemDto } from "@/services/generated/index";

export const userStore = storeManager.registerStore({
  id: "user",
  state: () => ({ users: [] as Array<UserItemDto>, loading: false }),
  getters: { userCount: (state) => state.users.length },
  actions: {
    async loadUsers() {
      this.loading = true;
      const res = await UserService.getListApi();
      this.users = res.items;
      this.loading = false;
    },
    addUser(user: any) {
      this.users.push(user);
    }
  }
});
