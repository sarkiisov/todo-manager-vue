<template>
  <div class="collection-header-display">
    <h2 class="collection-header-display__text">{{ emojiIcon }} {{ title }}</h2>
  </div>
</template>

<script setup lang="ts">
import { useCurrentCollection } from '@/composable/useCurrentCollection';

const { emojiIcon, title } = useCurrentCollection();
</script>

<style scoped>
.collection-header-display {
  flex-grow: 1;
  min-width: 0;
}
.collection-header-display:hover {
  cursor: pointer;
  background: var(--c-bg-mute);
  border-radius: 4px;
}
.collection-header-display__text {
  padding: 8px 0px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
  font-weight: 500;
  color: var(--c-text);
}
</style>
