<script setup>
import { ref } from "vue";

defineProps(['e'])

const year = ref(new Date().getFullYear())
const version = ref('v1.1.4')
</script>

<template>
<div class="container">
  {{ e }}
  <header>
    <slot name="header"><h1>Header</h1></slot>
  </header>
  <main><slot name="default"></slot></main>
  <footer>
    <slot name="footer" :year="year" :version="version">
      © VueJs {{ year }}
    </slot>
  </footer>
</div>
</template>

<style scoped>

</style>