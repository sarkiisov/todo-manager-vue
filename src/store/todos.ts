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
    createTodo(collectionId: Todo['collectionId'], body: Todo['body']) {
      const todo: Todo = {
        collectionId,
        body,
        id: crypto.randomUUID(),
        timestamp: Date.now(),
        isCompleted: false,
        isImportant: false
      };
      this.todos.unshift(todo);
    },
    deleteTodo(todoId: Todo['id']) {
      const todoIndex = this.todos.findIndex((object) => object.id === todoId);
      if (todoIndex !== -1) {
        this.todos.splice(todoIndex, 1);
      }
    },
    deleteTodos(collectionId: Todo['collectionId']) {
      this.todos = this.todos.filter((object) => object.collectionId !== collectionId);
    },
    toggleCompleted(id: Todo['id']) {
      const todo = this.todos.find((object) => object.id === id);
      if (todo) {
        todo.isCompleted = !todo.isCompleted;
      }
    },
    toggleImportant(id: Todo['id']) {
      const todo = this.todos.find((object) => object.id === id);
      if (todo) {
        todo.isImportant = !todo.isImportant;
      }
    },
  },
  getters: {
    importantTodos(state) {
      return state.todos.filter((object) => object.isImportant);
    },
    currentCollectionTodos(state) {
      const collections = useCollectionsStore();
      return state.todos.filter((object) => object.collectionId === collections.getCurrentCollection.id);
    }
  },
  persist: true
});
