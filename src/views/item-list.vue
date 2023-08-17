<template>
  <todo-item
    v-for="item in props.todoList"
    :key="item.id"
    :id="item.id"
    :title="item.title"
    :status="item.status"
  />
</template>


<script lang="ts">
export default {
  name: "ItemList",
}
</script>


<script lang="ts" setup>
import { defineProps } from "vue";
import TodoItem from "@/components/todo-item.vue";

interface lTodoItem {
  id: number;
  title: string;
  status: "active" | "clear";
}

interface Props {
  todoList: lTodoItem[];
}

const props = defineProps<Props>();
</script>


<style lang="scss"></style>