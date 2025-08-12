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
      class="new-todo"
      autofocus=""
      autocomplete="off"
      placeholder="What needs to be done?"
      v-model="title"
      @keyup.enter="createNewTodo"
    />
  </header>
</template>

<script setup>
import { ref } from "vue";

const title = ref("");

const emit = defineEmits();

function createNewTodo() {
  emit("create-todo", title.value);
  title.value = "";
}
</script>
