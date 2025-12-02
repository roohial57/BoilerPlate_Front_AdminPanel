import { inject, InjectionKey, readonly, Ref, ref } from 'vue';
import type { NotificationItem, NotificationOptions, NotificationType } from './types';

export interface NotificationStore {
  notifications: Readonly<Ref<NotificationItem[]>>;
  notify: (options: NotificationOptions) => number;
  dismiss: (id: number) => void;
  clear: () => void;
  /**
   * Helper for showing typed notifications, e.g. success('Saved').
   */
  ofType: (type: NotificationType, message: string, title?: string, timeout?: number) => number;
}

export const notificationInjectionKey: InjectionKey<NotificationStore> = Symbol('notification-store');

export function createNotificationStore(): NotificationStore {
  const items = ref<NotificationItem[]>([]);
  const timers = new Map<number, ReturnType<typeof setTimeout>>();
  let seed = 0;

  const dismiss = (id: number) => {
    items.value = items.value.filter((item) => item.id !== id);
    const timer = timers.get(id);
    if (timer) {
      clearTimeout(timer);
      timers.delete(id);
    }
  };

  const clear = () => {
    items.value = [];
    timers.forEach((timer) => clearTimeout(timer));
    timers.clear();
  };

  const notify = (options: NotificationOptions): number => {
    const id = ++seed;
    const timeout = options.timeout ?? 5000;
    const type = options.type ?? 'info';

    items.value = [
      ...items.value,
      {
        id,
        message: options.message,
        title: options.title,
        type,
      },
    ];

    if (timeout > 0) {
      const timer = setTimeout(() => dismiss(id), timeout);
      timers.set(id, timer);
    }

    return id;
  };

  const ofType = (type: NotificationType, message: string, title?: string, timeout?: number) =>
    notify({ type, message, title, timeout });

  return {
    notifications: readonly(items),
    notify,
    dismiss,
    clear,
    ofType,
  };
}

export function useNotificationService(): NotificationStore {
  const store = inject(notificationInjectionKey);
  if (!store) {
    throw new Error('Notification plugin has not been installed. Call app.use(Notifications) first.');
  }
  return store;
}

