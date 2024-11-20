<script setup>
import { ref } from "vue";

const text = defineModel()
const qwe = defineModel('count')
</script>

<template>
  <div>
    <label>
      <slot>default</slot>
      <input v-model="text">
    </label>
    <button @click="text = ''; qwe += 1">X</button>
    <pre>count = {{ text.length }}, xCount = {{ qwe }}</pre>
  </div>
</template>

<style scoped>
input {
  font-size: 2rem;
  padding: 1rem;
  border: 2px solid yellow;
  border-radius: 10px;
}

button {
  background-color: yellow;
  font-size: 2rem;
  padding: 1rem;
}
</style>