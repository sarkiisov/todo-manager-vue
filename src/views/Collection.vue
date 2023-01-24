<template>
  <CollectionStatistic />
  <TodoForm />
  <TodoList :todos="todoStore.currentCollectionTodos"/>
</template>

<script setup lang="ts">
import CollectionStatistic from '@/components/CollectionStatistic.vue';
import TodoForm from '@/components/TodoForm.vue';
import TodoList from '@/components/TodoList.vue';
import { useTodosStore } from '@/store/todos';

const todoStore = useTodosStore();
</script>
