<template>
  <ul>
    <li v-for="user in users" :key="user.id">{{ user.name }} ({{ user.email }})</li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useUserStore } from '../store/useUserStore';

export default defineComponent({
  setup() {
    const userStore = useUserStore();
    const users = computed(() => userStore.users);
    return { users };
  },
});
</script>
