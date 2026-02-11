<template>
  <header class="header">
    <a
      aria-current="page"
      href="#/"
      class="router-link-active router-link-exact-active"
    >
      <h1 @click="$emit('clear-all')">todos</h1> </a
    ><input
      type="text"
      class="new-todo"
      autofocus=""
      autocomplete="off"
      v-model="text"
      placeholder="What needs to be done?"
      @keydown.enter="createNewTodo"
    />
  </header>
</template>

<script setup>
import { ref } from 'vue'

const text = ref('')

const emit = defineEmits(['new-todo', 'clear-all'])

function createNewTodo() {
  emit('new-todo', text.value)
  text.value = ''
}
</script>
