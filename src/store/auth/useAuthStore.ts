
import { storeManager } from "../PiniaStoreManager";
import router from "@/router";
import { AuthService, LoginCommand, LoginResultDto, UserService } from "@/services/generated/index";
import axios from 'axios';

export const useAuthStore = () => storeManager.registerStore({
  id: "user",
  state: () => ({
    token: null as string | null,
    userName: null as string | null,
    expireAt: null as Date | null,
    user: null,
  }),
  getters: {},
  actions: {
    async login(username: string, password: string) {
      const req: LoginCommand = {
        username: username,
        password: password,
      };
      const res = await AuthService.loginApi(req);
      this.token = res.token;
      this.userName = res.userName;
      this.expireAt = res.expireAt;
      this.setAxiosInterceptors();
      router.push(router.currentRoute().query.url);
    },
    clearToken() {
      this.token = null;
      this.userName = null;
      this.expireAt = null;
      this.user = null;
    },
    setAxiosInterceptors() {
      axios.interceptors.request.use(config => {
        if (this.token) {
          config.headers.Authorization = `Bearer ${this.token}`;
        }
        return config;
      });

      axios.interceptors.response.use(
        response => response,
        async error => {
          const originalRequest = error.config;
          if (error.response?.status === 401) {
            window.location.href = `/auth?url=${router.currentRoute().path}`;
          }

          return Promise.reject(error);
        }
      );
    },
  }
});
