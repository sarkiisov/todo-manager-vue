<template>
  <div class="collection-header">
    <CollectionHeaderDisplay v-if="!showEditor" @click="openEditor"/>
    <CollectionHeaderEditor v-else @close-editor="closeEditor"/>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import CollectionHeaderDisplay from '@/components/CollectionHeaderDisplay.vue';
import CollectionHeaderEditor from '@/components/CollectionHeaderEditor.vue';

const showEditor = ref(false);

const openEditor = () => {
  showEditor.value = true;
};

const closeEditor = () => {
  showEditor.value = false;
};
</script>

<style scoped>
.collection-header {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  height: 100px;
  user-select: none;
}
</style>
