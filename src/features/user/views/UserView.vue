<template>
  <div>
    <h2>User List</h2>
    <UserList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UserList from '../components/UserList.vue';
export default defineComponent({ name: 'UserView', components: { UserList } });
</script>
