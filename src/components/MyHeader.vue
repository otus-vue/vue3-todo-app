<template>
  <div class="child" role="child">
    <h1 @click="setText">{{ text }}</h1>
    <h3 v-bind="$attrs">{{ myNumber }} ({{ number }})</h3>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps(["text", "number"]);

const myNumber = computed(() => props.number * 100 + 3);

defineOptions({
  inheritAttrs: false,
});

const emits = defineEmits();

function setText() {
  emits("set-text", "new text");
}
</script>
