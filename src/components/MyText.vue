<script setup>
import { computed, ref } from "vue";

const props = defineProps({
  'text': String,
  'number': Number,
  'obj': {
    type: Object,
    default: () => ({
      'qwe': false
    })
  }
})

console.log(`props.text`, props.text)

const internalNumber = ref(props.number)

const internalText = computed(() => `@${props.text}!!!`)

const emit = defineEmits([])

function inc() {
  emit('set-text', 'new text'+Math.random())
}

defineOptions({
  inheritAttrs: false
})


</script>

<template>
  <div
      role="child"
      data-id="child"
      class="child"
  >
    <p>{{ props.number }}</p>
    <h1 @click="inc">{{ internalText }}</h1>
    <h3>{{ typeof internalNumber }}</h3>
    <h3>{{ internalNumber + 4 }}</h3>
  </div>
</template>
