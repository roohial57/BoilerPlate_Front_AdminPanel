import { createApp } from 'vue';
import { storeManager } from './store/StoreManager';
import App from './vue-ui/App.vue';
import router from './vue-ui/router';
import registerGlobalComponents from './vue-ui/global-components';
import { loadAppConfig } from './AppConfig';
import { OpenAPI } from '@/services/generated/core/OpenAPI';
import Notifications from './vue-ui/components/common/NotificationPlugin';
import { authStore } from "./store/auth/authStore";

async function initApp() {

  try {
    // Load app configuration
    const config = await loadAppConfig();

    // Apply configuration to OpenAPI
    OpenAPI.BASE = config.apiBaseUrl;
    if (config.apiVersion) {
      OpenAPI.VERSION = config.apiVersion;
    }


  } catch (error) {
    console.error('Failed to load app-config.json', error);
    // Show user-friendly error message
    document.body.innerHTML = `
      <div style="display: flex; align-items: center; justify-content: center; height: 100vh; font-family: sans-serif;">
        <div style="text-align: center;">
          <h1>Application Initialization Error</h1>
          <p>Failed to load application configuration. Please refresh the page.</p>
        </div>
      </div>
    `;
  }

  const app = createApp(App);

  // هندلر سراسری برای خطاها
  app.config.errorHandler = (err, instance, info) => {
    console.error('Global Error:', err);
    console.error('Component:', instance);
    console.error('Info:', info);

    // می‌توانید ارورها را به سرور لاگینگ بفرستید
    // sendErrorToServer(err);

    // نمایش پیام کاربر پسند
    //alert('یک خطای ناگهانی رخ داده است!');
  };

  app.use(storeManager.pinia);
  authStore().setAxiosInterceptors();
  app.use(router);
  registerGlobalComponents(app);
  app.use(Notifications);
  app.mount('#app');
  // set auth
}

initApp();

