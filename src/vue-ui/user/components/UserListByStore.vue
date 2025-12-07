<template>
  <div>
    <p>Total users: {{ getters.userCount }}</p>
    <ul>
      <li v-for="u in refs.users" :key="u.id">{{ u.name }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { userStore } from '@/store/user/userStore';

const { refs, actions, getters } = userStore;

onMounted(() => actions.loadUsers());
</script>
