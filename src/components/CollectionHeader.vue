<template>
  <div class="collection-header" ref="headerElement">
    <CollectionHeaderDisplay v-if="!showEditor" @click="openEditor"/>
    <CollectionHeaderEditor v-else/>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useOutsideClick } from '@/composable/useOutsideClick';
import CollectionHeaderDisplay from './CollectionHeaderDisplay.vue';
import CollectionHeaderEditor from './CollectionHeaderEditor.vue';

const headerElement = ref();
const showEditor = ref(false);

const openEditor = () => {
  showEditor.value = true;
};

const closeEditor = () => {
  showEditor.value = false;
};

useOutsideClick(headerElement, () => {
  if (showEditor.value) {
    closeEditor();
  }
});
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
