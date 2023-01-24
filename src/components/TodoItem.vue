<template>
  <div
    class="todo-item"
    :class="{
      'todo-item_completed': props.todo.isCompleted,
      'todo-item_important': props.todo.isImportant
    }"
    @click.middle="deleteTodo"
  >
    <button class="todo-item__completed-toggle" @click="toggleCompleted">
      <CheckIcon v-if="props.todo.isCompleted" :width="20" :height="20"/>
    </button>
    <div class="todo-item__body">
      <span>{{ props.todo.body }}</span>
    </div>
    <button class="todo-item__important-toggle" @click="toggleImportant">
      <StarIcon :width="16" :height="16"/>
    </button>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { Todo } from '@/types/Todo';
import CheckIcon from '@/components/icons/CheckIcon.vue';
import StarIcon from '@/components/icons/StarIcon.vue';
import { useTodosStore } from '@/store/todos';

const props = defineProps({
  todo: { type: Object as PropType<Todo>, required: true }
});

const todosStore = useTodosStore();

const toggleCompleted = () => {
  todosStore.toggleCompleted(props.todo.id);
};

const toggleImportant = () => {
  todosStore.toggleImportant(props.todo.id);
};

const deleteTodo = () => {
  todosStore.deleteTodo(props.todo.id);
};
</script>

<style scoped>
.todo-item {
  display: flex;
  align-items: center;
  height: 50px;
  border-bottom: 1px solid var(--c-border);
}
.todo-item__body {
  flex-grow: 1;
  margin: 0px 20px;
  color: var(--c-text);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  user-select: none;
}
.todo-item__completed-toggle {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: 1px solid var(--c-border);
  border-radius: 50%;
  outline: none;
  background: none;
}
.todo-item__completed-toggle:hover {
  cursor: pointer;
}
.todo-item_completed
.todo-item__completed-toggle {
  color: var(--c-border);
  background: var(--c-success);
  border: 1px solid currentColor;
}
.todo-item_completed
.todo-item__body {
  text-decoration: line-through;
}
.todo-item__important-toggle {
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  background: none;
  color: var(--c-border);
}
.todo-item__important-toggle:hover {
  cursor: pointer;
}
.todo-item_important
.todo-item__important-toggle {
  color: var(--c-warning);
}
</style>
