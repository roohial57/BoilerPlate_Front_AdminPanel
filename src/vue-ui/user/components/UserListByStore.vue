<template>
  <div>
    <p>Total users: 
      <span>{{ store.userCount }}</span>
    </p>
    <ul>
      <li v-for="u in store.users" :key="u.id">{{ u.userName }}--{{ u.fullName }}--{{ u.isAdmin }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { userStore } from '@/store/user/userStore';

const store = userStore;

onMounted(() => store.loadUsers());
</script>
