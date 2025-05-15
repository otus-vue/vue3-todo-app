<template>
  <div
    role="child"
    class="child"
  >
    <h1 @click="setProp">{{ computedText }}</h1>
    <h2>{{ number }}</h2>
    <h2>{{ square }}</h2>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";

const props = defineProps({
  text: String,
  number: {
    type: Number,
    required: true,
  },
});

const emit = defineEmits();

function setProp() {
  emit("set-text", "updated from child");
}

defineOptions({
  inheritAttrs: false,
});

const a = ref(2);
const b = ref(5);

const square = computed(() => a.value * b.value);
const computedText = computed(() => `<<<${props.text}>>>`);
</script>
