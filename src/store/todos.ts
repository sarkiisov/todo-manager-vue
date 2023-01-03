import { defineStore } from 'pinia';
import { useCollectionsStore } from '@/store/collections';
import { Todo } from '@/types/Todo';

export type TodosState = {
  todos: Todo[];
};

export const useTodosStore = defineStore('todos', {
  state: (): TodosState => ({
    todos: []
  }),
  actions: {
  },
  getters: {
    importantTodos(state) {
      return state.todos.filter((object) => object.isImportant);
    },
    currentCollectionTodos(state) {
      const collections = useCollectionsStore();
      return state.todos.filter((object) => object.collectionId === collections.getCurrentCollection.id);
    }
  }
});
