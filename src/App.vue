<template>
  <div class="container">
    <div class="row">
      <base-header/>
    </div>
    <div class="row">
      <todo-input @update:todo="handleUpdateTodoList"/>
    </div>
    <div class="row">
      <router-view :todoList="todoList"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import BaseHeader from "@/components/header.vue";
import TodoInput from "@/components/todo-input.vue";

interface TodoItem {
  id: number;
  title: string;
  status: "active" | "clear";
}

const todoList = ref([
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
] as TodoItem[]);

const handleUpdateTodoList = (item: TodoItem) => {
  todoList.value.push(item);
};
</script>

<style lang="scss">
#app {
  padding: 100px;

  .row + .row {
    margin-top: 15px;
  }
}
</style>