<template>
  <header>
    <slot name="header"><h1>Header</h1></slot>
  </header>
  <main><slot name="default"></slot></main>
  <footer>
    <slot
      name="footer"
      :year="year"
      :version="version"
      >(C) VueJS - {{ year }} - {{ version }}</slot
    >
  </footer>
</template>

<script setup>
import { ref } from 'vue'

const year = new Date().getFullYear()
const version = ref('v1.1.0')
</script>
