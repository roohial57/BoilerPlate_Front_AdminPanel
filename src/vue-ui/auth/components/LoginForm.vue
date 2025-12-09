<template>
  <form @submit.prevent="onSubmit">
    <input v-model="userName" placeholder="UserName" />
    <input v-model="password" placeholder="Password" type="password" />
    <button type="submit">Login</button>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useAuthStore } from '@/store/auth/useAuthStore';

export default defineComponent({
  setup() {
    const userName = ref('admin');
    const password = ref('Admin123!');
    const auth = useAuthStore();
    async function onSubmit() {
      await auth.actions.login(userName.value, password.value);
    }
    return { userName, password, onSubmit };
  },
});
</script>
