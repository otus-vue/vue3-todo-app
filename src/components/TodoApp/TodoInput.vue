<template>
  <header class="header">
    <a
      aria-current="page"
      href="#/"
      class="router-link-active router-link-exact-active"
    >
      <h1>todos</h1> </a
    ><input
      type="text"
      @keyup.enter="createTodo()"
      v-model="text"
      class="new-todo"
      autofocus=""
      autocomplete="off"
      placeholder="What needs to be done?"
    />
  </header>
</template>

<script setup>
import { ref } from "vue";

const text = ref("");

const emit = defineEmits();
function createTodo() {
  if (text.value === "") return;
  emit("create-todo", text.value);
  text.value = "";
}
</script>
