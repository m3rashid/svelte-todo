import { writable } from 'svelte/store';

export interface Todo {
  id: string;
  title: string;
  done: boolean;
}

export const initialTodoList = writable<Todo[]>([
  {
    id: 't1',
    title: 'Learn Svelte',
    done: false,
  },
  {
    id: 't2',
    title: 'Laugh a bit',
    done: false,
  },
  {
    id: 't3',
    title: 'Learn Golang',
    done: false,
  },
]);
