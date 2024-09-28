<template>
  <header class="header">
    <h1>todos</h1>
    <input v-model="text" @keyup.enter="addTodo" class="new-todo" placeholder="What needs to be done?" autofocus>
  </header>
</template>

<script setup>
import { ref } from "vue";

const text = ref('')

const emit = defineEmits(['add-todo'])

function addTodo() {
  emit('add-todo', text.value)
  text.value = ''
}
</script>