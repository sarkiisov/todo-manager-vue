<template>
  <div class="header">
    <h2 class="header__text">
      <slot />
    </h2>
  </div>
</template>

<script setup lang="ts">
</script>

<style>
.header {
  height: 100px;
  display: flex;
  align-items: center;
  user-select: none;
}
.header__text {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 500;
  color: var(--c-text);
}
</style>
