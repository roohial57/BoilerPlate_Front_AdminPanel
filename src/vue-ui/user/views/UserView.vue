<template>
  <div>
    <h2>User List</h2>
    <button
      class="btn btn-default btn-block"
      @click="$notify({ message: 'ddd' })"
    >
      Top Left
    </button>
    <button class="btn btn-default btn-block" @click="reloadUserList">Refresh</button>
    <UserList />
  </div>
</template>

<script lang="ts">
import { userStore } from "@/store/user/userStore";
import { defineComponent } from "vue";
import UserList from "../components/UserListByStore.vue";

const store = userStore;

export default defineComponent({
  name: "UserView",
  components: { UserList: UserList },
  methods: {
    reloadUserList() {
      store.loadUsers();
    },
  },
});
</script>
