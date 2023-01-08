<template>
  <div class="todo-list">
    <TodoItem
      v-if="props.todos.length > 0"
      v-for="todo in props.todos"
      :todo="todo"
    />
    <div v-else class="todo-empty">
      <span class="todo-empty__body">Collection is empty</span>
    </div>
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
.todo-empty {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
}
.todo-empty__body {
  user-select: none;
  color: var(--c-text);
}
</style>
