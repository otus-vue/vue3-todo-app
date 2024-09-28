<template>
  <label>
    {{ label }}
    <input v-model="text">
    @ {{ count }}
    <button @click="$emit('update:modelValue', '')">clear</button>
  </label>
</template>

<script setup>
import { watch } from "vue";

const props = defineProps(['label', 'modelValue', 'count'])
const text = defineModel()

const emit = defineEmits(['update:count'])

watch(text, () => emit('update:count', text.value.length), {
  immediate: true
})
</script>

<style scoped>
input {
  padding: 1rem;
  font-size: 2rem;
  background: #fff;
  border: 10px solid yellow;
  border-radius: 10px;
}
</style>