<script setup>
import { ref } from "vue";

const todoTitle = ref('')
</script>

<template>
  <header class="header">
    <h1>todos</h1>
    <input class="new-todo"
           placeholder="What needs to be done?"
           autofocus
           v-model="todoTitle"
           @keyup.enter="$emit('add-todo', todoTitle); todoTitle = ''"
    >
  </header>
</template>

<style scoped>

</style>