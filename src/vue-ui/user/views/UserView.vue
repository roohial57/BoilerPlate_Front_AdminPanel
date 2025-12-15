<template>
  <div>
    <h2>User List</h2>
    <button class="btn btn-default btn-block" @click="reloadUserList">
      Refresh
    </button>
    <UserList />
  </div>
</template>

<script setup lang="ts">
import UserList from "../components/UserListByStore.vue";
import { userStore } from "@/store/user/userStore";

function reloadUserList() {
  userStore.loadUsers();
}
</script>
