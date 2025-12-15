<template>
  <div>
    <h2>Notify Demo</h2>
    <button
      class="btn btn-default btn-block"
      @click="$notification.notify({ message: 'ddd' })"
    >
      Notify
    </button>
    <button
      class="btn btn-default btn-block"
      @click="$notification.notifyDanger('ddd')"
    >
      Notify Danger
    </button>
    <button
      class="btn btn-default btn-block"
      @click="$notification.notifyWarning('ddd')"
    >
      Notify Warning
    </button>
    <button
      class="btn btn-default btn-block"
      @click="$notification.notifySuccess('ddd')"
    >
      Notify Success
    </button>
    <button
      class="btn btn-default btn-block"
      @click="$notification.notifyInfo('ddd')"
    >
      Notify Info
    </button>
  </div>
</template>

<script setup lang="ts">
import { notifyStore } from "@/store/notification/notifyStore";

const store = notifyStore();
</script>
