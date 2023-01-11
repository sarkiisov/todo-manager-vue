<template>
  <button class="button">
    <slot />
  </button>
</template>

<script setup lang="ts">
</script>

<style scoped>
.button {
  min-width: 150px;
  height: 40px;
  padding: 0px 12px;
  border-radius: 4px;
  font-size: 16px;
  background: var(--c-bg);
  border: 1px solid var(--c-border);
  color: var(--c-text);
}
.button:hover {
  cursor: pointer;
  background: var(--c-bg-mute);
}
</style>
