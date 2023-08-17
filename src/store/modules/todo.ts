import { defineStore } from "pinia";
import { TodoItem } from "../index.interface";

export const useStoreTodo = defineStore("todo", {
  state: () => ({
    todoList: [
      {
        id: 0,
        title: "청소하기",
        status: "active",
      },
      {
        id: 1,
        title: "공과금 내기",
        status: "active",
      },
      {
        id: 2,
        title: "운동 30분하기",
        status: "clear",
      },
    ] as TodoItem[],
  }),
  getters: {},
  actions: {
    addTodoItem(item: TodoItem) {
      this.todoList.push(item);
    },
    removeTodoItem(id: number) {
      this.todoList.splice(id, 1);
    },
  },
});
