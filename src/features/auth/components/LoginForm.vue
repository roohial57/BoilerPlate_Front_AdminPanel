<template>
  <form @submit.prevent="onSubmit">
    <input v-model="email" placeholder="Email" />
    <input v-model="password" placeholder="Password" type="password" />
    <button type="submit">Login</button>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useAuthStore } from '../store/useAuthStore';

export default defineComponent({
  setup() {
    const email = ref('');
    const password = ref('');
    const auth = useAuthStore();
    function onSubmit() {
      auth.login(email.value, password.value);
    }
    return { email, password, onSubmit };
  },
});
</script>
