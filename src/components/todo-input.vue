<template>
  <input
    type="text"
    class="form-control"
    placeholder="할 일을 입력해주세요."
    :value="inputValue"
    @keyup.enter="handleAddItem"
  />
</template>

<script lang="ts">
export default {
  name: "ToodoInput",
};
</script>

<script lang="ts" setup>
import { ref } from "vue";
import { useStoreTodo } from "@/store/modules/todo";

const store = useStoreTodo();
const inputValue = ref("");

const handleAddItem = (event: Event) => {
  const value = (event.target as HTMLInputElement).value;
  if (!value) return;
  const length = store.todoList.length;
  const createdId = length === 0 ? 0 : store.todoList[length - 1].id + 1;

  inputValue.value = value;
  store.addTodoItem({
    id: createdId,
    title: value,
    status: "active",
  });
  inputValue.value = "";
};
</script>

<style lang="scss">
.todo-input {
  font-size: 14px;

  &::placeholder {
    font-size: 14px;
  }
}
</style>
