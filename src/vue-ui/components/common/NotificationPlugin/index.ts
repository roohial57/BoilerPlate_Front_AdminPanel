import type { App, Plugin } from 'vue';
import { notifyStore } from '@/store/notification/notifyStore';

const NotificationPlugin: Plugin = {
  install(app: App) {
    if ((app.config.globalProperties as Record<string, unknown>).$notify) {
      return;
    }

    app.config.globalProperties.$notification = notifyStore();
  },
};

export default NotificationPlugin;

