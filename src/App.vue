<template>
  <Page :e="123">
    <template #header>
      my header
    </template>

    <template #default>
      <pre v-css="color" @click="text = 'updated'; color = 'blue';">{{ text }} @ {{ cleared }}</pre>
      <my-input
          v-model="text"
          v-model:count="cleared"
      >
      </my-input>
    </template>

    <template #footer="{year, version}">
      {{ year }} - {{ version }}
    </template>
  </Page>
</template>

<script setup>
import { ref } from "vue";
import MyInput from "@/MyInput.vue";
import Page from "@/Page.vue";

const text = ref('init');
const cleared = ref(0);

const color = ref("red");
const target = ref('color');
</script>