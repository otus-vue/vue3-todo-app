<template>
  <div role="child" class="child" qwe="adsf">
    <h1 v-on:click="changeText">{{ myText }}</h1>
    <h3 @click="myNumber++">{{ myNumber + 1 }}</h3>
    <h3>{{ typeof number}}</h3>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";

const props = defineProps({
  'text': String,
  'number': {
    type: Number,
    default: 1
  }
})

defineOptions({
  inheritAttrs: false
})

const myNumber = ref(props.number)
const myText = computed(() => props.text + '!!!')

const emits = defineEmits()

function changeText() {
  emits('set-text', myNumber)
}
</script>