<template>
  <div class="user-profile">
    <h3>پروفایل کاربر</h3>
    <div v-if="user">
      <p><strong>ID:</strong> {{ user.id }}</p>
      <p><strong>نام کاربری:</strong> {{ user.username }}</p>
      <p v-if="user.fullName"><strong>نام کامل:</strong> {{ user.fullName }}</p>
      <p v-if="user.roles && user.roles.length"><strong>نقش‌ها:</strong> {{ user.roles.join(', ') }}</p>
    </div>
    <div v-else>
      <p>کاربر وارد نشده</p>
    </div>
    <BaseButton @click="simulateApiLogin" :disabled="loading">
      {{ loading ? 'در حال ورود...' : 'ورود آزمایشی' }}
    </BaseButton>
    <BaseButton v-if="user" @click="refreshUserData" :disabled="loading" variant="outline">
      {{ loading ? 'در حال بروزرسانی...' : 'بروزرسانی اطلاعات' }}
    </BaseButton>
    <BaseButton v-if="user" @click="logout" variant="secondary">
      خروج
    </BaseButton>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue';
import { useAuthStore, AuthUser } from '../store/useAuthStore';
import { AuthModel, loginAndGetUser } from '../adapters/authAdapter';

export default defineComponent({
  name: 'UserProfile',
  setup() {
    const authStore = useAuthStore();
    const loading = ref(false);

    const user = computed(() => authStore.user);

    // استفاده از adapter برای عملیات لاگین واقعی
    const simulateApiLogin = async () => {
      loading.value = true;
      try {
        // استفاده از adapter برای لاگین و دریافت اطلاعات کاربر
        const userModel = await loginAndGetUser({
          username: 'testuser',
          password: 'testpass'
        });

        // بروزرسانی store با داده تبدیل شده
        authStore.loginWithModel(userModel);
      } catch (error) {
        console.error('خطا در ورود:', error);
      } finally {
        loading.value = false;
      }
    };

    // دریافت اطلاعات کاربر فعلی از adapter
    const refreshUserData = async () => {
      loading.value = true;
      try {
        const { getCurrentUser } = await import('../adapters/authAdapter');
        const userModel = await getCurrentUser();
        authStore.loginWithModel(userModel);
      } catch (error) {
        console.error('خطا در دریافت اطلاعات کاربر:', error);
      } finally {
        loading.value = false;
      }
    };

    const logout = () => {
      authStore.logout();
    };

    return {
      user,
      loading,
      simulateApiLogin,
      refreshUserData,
      logout
    };
  },
});
</script>

<style scoped>
.user-profile {
  max-width: 400px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.user-profile p {
  margin: 10px 0;
}
</style>
