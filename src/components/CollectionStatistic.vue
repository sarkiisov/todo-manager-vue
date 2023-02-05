<template>
  <div class="collection-statistic">
    <CollectionProgressPie :percentage="completitionPercent"/>
    <span class="collection-statistic__body">{{ `${completedTodosCount} / ${allTodosCount}` }}</span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useTodosStore } from '@/store/todos';
import CollectionProgressPie from '@/components/CollectionProgressPie.vue';

const todoStore = useTodosStore();

const allTodosCount = computed(() => todoStore.currentCollectionTodos.length);
const completedTodosCount = computed(() => todoStore.currentCollectionTodos.filter((object) => object.isCompleted).length);
const completitionPercent = computed(() => Math.round(100 * (allTodosCount.value !== 0 ? (completedTodosCount.value / allTodosCount.value) : 0)));
</script>

<style scoped>
.collection-statistic {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  border-bottom: 1px solid var(--c-border);
}
.collection-statistic__body {
  color: var(--c-text);
  user-select: none;
}
</style>
