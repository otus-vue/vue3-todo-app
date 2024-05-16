<script setup>
import { ref } from "vue";

const headerText = ref('header 123')
const year = new Date().getFullYear()
</script>

<template>
  <header>
    <slot name="header">
      <h1 v-css:color="'red'">{{ headerText }}</h1>
    </slot>
  </header>
  <main>
    <slot name="default"></slot>
  </main>
  <footer>
    <slot name="footer" :year="year">
      © Vue.js {{ year }}
    </slot>
  </footer>
</template>

<style scoped>

</style>