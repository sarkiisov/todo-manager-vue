<template>
  <div class="todo-list">
    <TodoItem
      v-for="todo in props.todos"
      :todo="todo"
    />
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { Todo } from '@/types/Todo';
import TodoItem from '@/components/TodoItem.vue';

const props = defineProps({
  todos: { type: Array as PropType<Todo[]>, required: true }
});
</script>

<style>
.todo-list {
  display: grid;
  grid-template-columns: 1fr;
  min-height: 50px;
  overflow-y: scroll;
}
.todo-list::-webkit-scrollbar {
  display: none;
}
</style>
