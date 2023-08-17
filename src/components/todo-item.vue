<template>
  <div class="input-group">
    <div class="input-group-text">
      <input
        class="form-check-input mt-0"
        type="checkbox"
        :checked="props.status === 'clear'"
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
import { defineProps, defineEmits } from "vue";

interface TodoItem {
  id: number;
  title: string;
  status: "active" | "clear";
}

const props = defineProps<TodoItem>();
const emit = defineEmits(["remove:todo"]);
const handleRemoveItem = () => {
  emit("remove:todo", props.id);
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
