
import { storeManager } from "../StoreManager";

export const notifyStore = ()=> storeManager.registerStore({
  id: "notify",
  state: () => ({
    items: [] as NotificationItem[],
    timers: new Map<number, ReturnType<typeof setTimeout>>(),
    seed: 0
  }),
  getters: {},
  actions: {
    dismiss(id: number) {
      this.items = this.items.filter((item) => item.id !== id);
      const timer = this.timers.get(id);
      if (timer) {
        clearTimeout(timer);
        this.timers.delete(id);
      }
    },

    clear() {
      this.items = [];
      this.timers.forEach((timer) => clearTimeout(timer));
      this.timers.clear();
    },

    notify(options: NotificationOptions): number {
      const id = ++this.seed;
      const timeout = options.timeout ?? 5000;
      const type = options.type ?? 'info';

      this.items = [
        ...this.items,
        {
          id,
          message: options.message,
          title: options.title,
          type,
        },
      ];

      if (timeout > 0) {
        const timer = setTimeout(() => this.dismiss(id), timeout);
        this.timers.set(id, timer);
      }

      return id;
    },

    notifyDanger(message: string, title?: string, timeout?: number): number {
      return this.notify({ type: NotificationType.Danger, message, title, timeout });
    },
    notifyInfo(message: string, title?: string, timeout?: number): number {
      return this.notify({ type: NotificationType.Info, message, title, timeout });
    },
    notifySuccess(message: string, title?: string, timeout?: number): number {
      return this.notify({ type: NotificationType.Success, message, title, timeout });
    },
    notifyWarning(message: string, title?: string, timeout?: number): number {
      return this.notify({ type: NotificationType.Warning, message, title, timeout });
    }
  }
});

export enum NotificationType {
  Info = 'info',
  Success = 'success',
  Warning = 'warning',
  Danger = 'danger',
}

export interface NotificationOptions {
  title?: string;
  message: string;
  type?: NotificationType;
  /**
   * Auto dismiss duration in milliseconds.
   * Set to 0 or a negative number to disable auto dismiss.
   */
  timeout?: number;
}

export interface NotificationItem {
  id: number;
  title?: string;
  message: string;
  type: NotificationType;
}