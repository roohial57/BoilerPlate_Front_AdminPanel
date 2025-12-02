export type NotificationType = 'info' | 'success' | 'warning' | 'danger';

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

