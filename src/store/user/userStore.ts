
import { storeManager } from "../PiniaStoreManager";
import { UserService } from "@/services/generated/index";

export const userStore = storeManager.registerStore({
  id: "user",
  state: () => ({ users: [] as any[], loading: false }),
  getters: { userCount: (state) => state.users.length },
  actions: {
    async loadUsers() {
      this.loading = true;
      this.users = await UserService.getListApi();
      this.loading = false;
    },
    addUser(user: any) {
      this.users.push(user);
    }
  }
});
