
import { storeManager } from "../StoreManager";
import router from "@/router";
import { AuthService, LoginCommand, LoginResultDto, UserService } from "@/services/generated/index";
import axios from 'axios';

export const authStore = () => storeManager.registerStore({
  id: "auth",
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
      this.setLoginData(res);
      this.setAxiosRequestInterceptor();
      router.push(router.currentRoute().query.url);
    },
    async refreshToken() {
      const res = await AuthService.refreshTokenApi();
      this.setLoginData(res);
      this.setAxiosRequestInterceptor();
    },
    setLoginData(loginResult: LoginResultDto) {
      this.token = loginResult.token;
      this.userName = loginResult.userName;
      this.expireAt = loginResult.expireAt;
    },
    clearToken() {
      this.token = null;
      this.userName = null;
      this.expireAt = null;
      this.user = null;
    },
    setAxiosInterceptors() {
      this.setAxiosResponsInterceptors();
      this.setAxiosRequestInterceptor();
    },
    setAxiosRequestInterceptor() {
      axios.interceptors.request.use(config => {
        config.withCredentials = true;
        if (this.token) {
          config.headers.Authorization = `Bearer ${this.token}`;
        }
        return config;
      });
    },
    setAxiosResponsInterceptors() {
      axios.interceptors.response.use(
        response => response,
        async error => {
          const originalRequest = error.config;
          
          if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
              await this.refreshToken();
              return axios(originalRequest); // دوباره ارسال درخواست اصلی
            } catch (refreshError) {
              this.clearToken();
              window.location.href = `/auth?url=${router.currentRoute().path}`;
              return Promise.reject(refreshError);
            }
          }

          return Promise.reject(error);
        }
      );


    },
  }
});
