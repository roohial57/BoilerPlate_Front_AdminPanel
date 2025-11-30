<template>
  <div>
    <h2>Auth Feature</h2>
    <LoginForm />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LoginForm from '../components/LoginForm.vue';
export default defineComponent({ name: 'AuthView', components: { LoginForm } });
</script>
