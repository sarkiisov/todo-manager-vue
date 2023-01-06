<template>
  <TodoForm :collection-id="collectionsStore.currentCollectionId"/>
  <TodoList :todos="todoStore.currentCollectionTodos"/>
</template>

<script setup lang="ts">
import TodoForm from '@/components/TodoForm.vue';
import TodoList from '@/components/TodoList.vue';
import { useCollectionsStore } from '@/store/collections';
import { useTodosStore } from '@/store/todos';

const todoStore = useTodosStore();
const collectionsStore = useCollectionsStore();
</script>

<style>
</style>
