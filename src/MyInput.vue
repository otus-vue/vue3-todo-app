<template>
  <label> <slot></slot>
    <input v-model="text">
  </label>
  <button @click="text = ''; count += 1">X</button>
  <pre>Count: {{ modelValue.length }}</pre>
  <pre>Cleared: {{ count }}</pre>
</template>

<script setup>
const [text, textModifiers] = defineModel()
const count = defineModel('count')

console.log(`textModifiers`, textModifiers)
</script>

<style scoped>
input {
  font-size: 2rem;
  border: 2px solid red;
  border-radius: 10px;
}

button {
  background: yellow;
  padding: 10px;
  font-size: 2rem;
}
</style>