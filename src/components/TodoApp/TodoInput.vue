<script setup>
import { ref } from "vue";

const text = ref('')
</script>

<template>
  <header class="header">
    <h1>todos</h1>
    <input class="new-todo"
           placeholder="What needs to be done?"
           autofocus
           v-model="text"
           @keyup.enter="$emit('add-todo', text); text = ''"
    >
  </header>
</template>