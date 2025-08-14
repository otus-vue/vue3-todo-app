<template>
  <label>
    <slot>label</slot>
    <input
      type="text"
      v-model="text"
    />
    <button @click="clear">X</button>
    <p>chars = {{ text.length }}, times = {{ cleared }}</p>
  </label>
</template>

<script setup>
const [text] = defineModel()
const [cleared, clearedModifiers] = defineModel('cleared')

function clear() {
  text.value = ''
  const step = clearedModifiers.two ? 2 : 1
  cleared.value = cleared.value + step
}
</script>

<style scoped>
input,
button {
  font-size: 3rem;
  border: 2px solid yellow;
}

button {
  background: yellow;
}
</style>
