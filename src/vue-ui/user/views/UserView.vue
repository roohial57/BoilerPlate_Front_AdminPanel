<template>
  <div>
    <h2>User List</h2>
    <button class="btn btn-default btn-block" @click="$notify({message:'ddd'})">
      Top Left
    </button>
    <UserList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UserList from '../components/UserListByStore.vue';
export default defineComponent({ name: 'UserView', components: { "UserList":UserList } });
</script>
