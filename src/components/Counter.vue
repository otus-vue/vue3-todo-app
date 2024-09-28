<template>
  <div>
    <slot :step="step" :event="event">
      <button @click="event">Increase by {{ step }} ({{ modelValue }})</button>
    </slot>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps(['modelValue'])

const emit = defineEmits(['update:model-value'])

const step = ref(2)

function event() {
  emit('update:model-value', props.modelValue + step.value)
}


</script>

<style scoped>
button {
  padding: 1rem;
  font-size: 2rem;
  background: #333;
  color: #fff;
}
</style>