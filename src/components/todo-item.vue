<template>
  <div class="input-group">
    <div class="input-group-text">
      <input
        class="form-check-input mt-0"
        type="checkbox"
        :checked="props.status === 'clear'"
        @change="hanldeChangeStatus"
      />
    </div>
    <input type="text" class="form-control" :value="props.title" disabled />
    <button
      class="btn btn-outline-secondary"
      type="button"
      @click="handleRemoveItem"
    >
      X
    </button>
  </div>
</template>

<script lang="ts">
export default {
  name: "TodoItem",
};
</script>

<script lang="ts" setup>
import { defineProps } from "vue";
import { useStoreTodo } from "@/store/modules/todo";
import { TodoItem } from "@/store/index.interface";

interface Props {
  id: TodoItem["id"];
  title: TodoItem["title"];
  status: TodoItem["status"];
}
const store = useStoreTodo();
const props = defineProps<Props>();
const handleRemoveItem = () => {
  store.removeTodoItem(props.id);
};
const hanldeChangeStatus = () => {
  const changeStatus = props.status === "active" ? "clear" : "active";
  store.changedStatus({
    id: props.id,
    status: changeStatus,
  });
};
</script>

<style lang="scss">
.input-group {
  padding: 0 !important;

  input {
    font-size: 14px;

    &::placeholder {
      font-size: 14px;
    }
  }

  button {
    font-size: 14px;
  }
}
</style>
