<template>
  <input type="text" class="form-control" placeholder="할 일을 입력해주세요."/>
</template>


<script lang="ts">
export default {
  name: "ToodoInput",
};
</script>


<script lang="ts" setup></script>


<style lang="scss">
.todo-input {
  font-size: 14px;

  &::placeholder {
    font-size: 14px;
  }
}
</style>