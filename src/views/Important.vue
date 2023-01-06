<template>
  <TodoList :todos="todoStore.importantTodos"/>
</template>

<script setup lang="ts">
import TodoList from '@/components/TodoList.vue';
import { useTodosStore } from '@/store/todos';

const todoStore = useTodosStore();
</script>
