<script setup>
import { ref } from 'vue'
import MyInput from './components/MyInput.vue'
import MyHeader from './components/MyHeader.vue'
import LayoutPage from './components/LayoutPage.vue'

const text = ref('init')
const cleared = ref(0)

const color = ref('lightblue')
const target = ref('color')
</script>

<template>
  <LayoutPage>
    <template #header>MyInput</template>

    <template #footer="{ version, year }">
      (C) MyCompany - {{ year }} - {{ version }}
    </template>

    <template #default>
      <h1
        v-css:[target].lastIndexOf.sdf.qwe="color"
        @click="
          () => {
            text = 'updated'
            color = 'yellow'
            target = 'background'
          }
        "
      >
        v-model
      </h1>
      <pre>text = |{{ text }}|, type = {{ typeof text }}</pre>
      <MyInput
        v-model.qwe.bool.aaa="text"
        v-model:cleared.two="cleared"
      >
      </MyInput
    ></template>
  </LayoutPage>
</template>
