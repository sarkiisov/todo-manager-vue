<template>
  <TodoList :todos="todosStore.todos"/>
</template>

<script setup lang="ts">
import TodoList from '@/components/TodoList.vue';
import { useTodosStore } from '@/store/todos';

const todosStore = useTodosStore();
</script>
