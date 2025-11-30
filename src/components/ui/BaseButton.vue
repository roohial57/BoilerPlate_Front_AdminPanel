<template>
  <button class="base-button" type="button">
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BaseButton',
});
</script>

<style scoped>
.base-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 6px;
  background: #2b6cb0;
  color: #fff;
  cursor: pointer;
  font-size: 0.95rem;
}

.base-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>


