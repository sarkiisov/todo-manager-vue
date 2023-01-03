<template>
  <div class="header">
    <h2 class="header__text">
      {{ route.name }}
    </h2>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<style scoped>
.header {
  height: 100px;
  display: flex;
  align-items: center;
  user-select: none;
}
.header__text {
  overflow: hidden;
  text-transform: capitalize;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 500;
  color: var(--c-text);
}
</style>
