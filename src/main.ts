import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import registerGlobalComponents from './global-components';
import { loadAppConfig } from './AppConfig';
import { OpenAPI } from './services/generated/core/OpenAPI';

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
  app.use(createPinia());
  app.use(router);
  registerGlobalComponents(app);
  app.mount('#app');
}

initApp();
