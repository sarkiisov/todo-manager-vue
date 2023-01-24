<template>
  <div class="todo-form">
    <PlusIcon class="todo-form__icon" :width="24" :height="24"/>
    <input
      class="todo-form__input"
      placeholder="Add new task"
      spellcheck="false"
      v-model="todoBody"
      @keyup.enter="createTodo"
    >
  </div>
</template>

<script setup lang="ts">
import { PropType, ref } from 'vue';
import PlusIcon from '@/components/icons/PlusIcon.vue';
import { Collection } from '@/types/Collection';
import { useTodosStore } from '@/store/todos';

const todoBody = ref('');

const props = defineProps({
  collectionId: { type: String as PropType<Collection['id']>, required: true }
});

const todosStore = useTodosStore();

const createTodo = () => {
  if (todoBody.value.length === 0) return;
  todosStore.createTodo(props.collectionId, todoBody.value);
  todoBody.value = '';
};
</script>

<style>
.todo-form {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  height: 50px;
  border-bottom: 1px solid var(--c-border);
}
.todo-form__icon {
  color: var(--c-border);
}
.todo-form__input {
  flex: 1;
  margin-left: 24px;
  font-size: 16px;
  background: none;
  color: var(--c-text);
  border: none;
  outline: none;
}
.todo-form__input::placeholder {
  color: var(--c-border);
}
.todo-form__input::selection {
  background: var(--c-bg-dark);
}
</style>
