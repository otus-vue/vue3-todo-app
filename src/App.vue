<template>
  <page>
    <template #footer="{ year }">{{ year }}</template>
    <template #default>
      <pre @click="text = 'updated'">{{ text }} @ {{ count }}</pre>
      <my-input v-model="text"
                v-model:count="count">
        <b @click="color = 'green'; target='borderColor'"
           v-css:[target]="color" v-css:color="'red'">write something</b>

      </my-input>
    </template>
  </page>
</template>

<style scoped>
b {
  border: transparent 1px solid;
}
</style>

<script setup>
import MyInput from "@/MyInput.vue";
import { ref } from "vue";
import Page from "@/components/Page.vue";

const text = ref('')
const count = ref(0)

const color = ref('yellow')
const target = ref('background')
</script>