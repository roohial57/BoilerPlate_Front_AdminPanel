import type { App, Plugin } from 'vue';
import Notifications from './Notifications.vue';
import { createNotificationStore, notificationInjectionKey } from './store';

const store = createNotificationStore();

const NotificationPlugin: Plugin = {
  install(app: App) {
    if ((app.config.globalProperties as Record<string, unknown>).$notify) {
      return;
    }

    app.component('notifications', Notifications);
    app.component('Notifications', Notifications);
    app.provide(notificationInjectionKey, store);
    app.config.globalProperties.$notify = store.notify;
  },
};

export default NotificationPlugin;

export { useNotificationService } from './store';
export type { NotificationItem, NotificationOptions, NotificationType } from './types';

