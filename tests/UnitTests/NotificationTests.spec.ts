import { describe, it, expect, vi, beforeEach } from 'vitest';
import { notifyStore, NotificationType } from '@/store/notification/notifyStore';
import NotificationPlugin from '@/plugins/NotificationPlugin';
import { createApp } from 'vue';

describe('notifyStore', () => {
  let store: ReturnType<typeof notifyStore>;

  beforeEach(() => {
    store = notifyStore();
    store.clear(); // اطمینان از اینکه قبل از هر تست خالی است
  });

  it('should add a notification', () => {
    const id = store.notify({ message: 'Hello' });

    expect(store.items).toHaveLength(1);
    expect(store.items[0].id).toBe(id);
    expect(store.items[0].message).toBe('Hello');
    expect(store.items[0].type).toBe(NotificationType.Info);
  });

  it('should dismiss a notification', () => {
    const id = store.notify({ message: 'Bye', timeout: 0 });
    expect(store.items).toHaveLength(1);

    store.dismiss(id);
    expect(store.items).toHaveLength(0);
  });

  it('should clear all notifications', () => {
    store.notify({ message: '1', timeout: 0 });
    store.notify({ message: '2', timeout: 0 });

    expect(store.items).toHaveLength(2);

    store.clear();
    expect(store.items).toHaveLength(0);
    expect(store.timers.size).toBe(0);
  });

  it('should auto-dismiss after timeout', async () => {
    vi.useFakeTimers();
    const id = store.notify({ message: 'Auto', timeout: 1000 });

    expect(store.items).toHaveLength(1);

    // جلو رفتن زمان
    vi.advanceTimersByTime(1000);

    expect(store.items).toHaveLength(0);

    vi.useRealTimers();
  });

  it('notifyDanger should set type to Danger', () => {
    const id = store.notifyDanger('Danger message');
    expect(store.items[0].type).toBe(NotificationType.Danger);
  });
});

describe('NotificationPlugin', () => {
  it('should install $notification to app', () => {
    const app = createApp({});
    NotificationPlugin.install(app);

    expect((app.config.globalProperties as any).$notification).toBeDefined();
  });

  it('should not overwrite existing $notify', () => {
    const app = createApp({});
    (app.config.globalProperties as any).$notify = 'existing';

    NotificationPlugin.install(app);
    expect((app.config.globalProperties as any).$notification).toBeUndefined();
    expect((app.config.globalProperties as any).$notify).toBe('existing');
  });
});
