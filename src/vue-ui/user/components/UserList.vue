<template>
  <ul>
    <li v-for="user in users" :key="user.id">
      {{ user.name }} ({{ user.email }})
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { UserService } from "@/services/generated/index";

export default defineComponent({
  async setup() {
    const users = await UserService.getListApi();
    return { users };
  },
});
</script>
