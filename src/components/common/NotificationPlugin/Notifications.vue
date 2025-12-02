<template>
  <div class="notifications vue-notifyjs" role="status" aria-live="polite">
    <transition-group name="list" tag="div">
      <article
        v-for="item in notifications"
        :key="item.id"
        class="notification list-item"
        :class="`notification--${item.type}`"
      >
        <div class="notification__content">
          <h4 v-if="item.title" class="notification__title">
            {{ item.title }}
          </h4>
          <p class="notification__message">
            {{ item.message }}
          </p>
        </div>
        <button class="notification__close" type="button" @click="dismiss(item.id)" aria-label="بستن پیام">
          ×
        </button>
      </article>
    </transition-group>
  </div>
</template>

<script setup lang="ts">
import { useNotificationService } from './store';

defineOptions({ name: 'Notifications' });

const { notifications, dismiss } = useNotificationService();
</script>

<style scoped lang="scss">
.notifications {
  position: fixed;
  top: 1rem;
  right: 1rem;
  width: min(340px, calc(100% - 2rem));
  z-index: 999;
  pointer-events: none;
}

.notification {
  pointer-events: auto;
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  padding: 0.85rem 1rem;
  margin-bottom: 0.75rem;
  border-radius: 0.75rem;
  box-shadow: 0 10px 40px rgba(15, 23, 42, 0.2);
  color: #fff;
  backdrop-filter: blur(12px);
  background: rgba(32, 40, 62, 0.9);
}

.notification__content {
  flex: 1;
}

.notification__title {
  margin: 0;
  font-size: 0.95rem;
  font-weight: 600;
}

.notification__message {
  margin: 0.15rem 0 0;
  font-size: 0.85rem;
  line-height: 1.3;
}

.notification__close {
  border: none;
  background: transparent;
  color: inherit;
  font-size: 1.5rem;
  line-height: 1;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.2s ease;
}

.notification__close:hover {
  opacity: 1;
}

.notification--success {
  background: rgba(5, 150, 105, 0.95);
}

.notification--info {
  background: rgba(59, 130, 246, 0.95);
}

.notification--warning {
  background: rgba(234, 179, 8, 0.95);
  color: #1f2937;
}

.notification--danger {
  background: rgba(239, 68, 68, 0.95);
}
</style>

