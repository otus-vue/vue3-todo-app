<template>
  <Counter v-model="count">
    <template #default="slotProps">
      <button @click="slotProps.event">Increase by {{ slotProps.step }} {{ count }} </button>
    </template>
  </Counter>
  <p @click="color = 'red'"
     v-style:color="color" v-style:[target]="'blue'"><my-input v-model="text" :label="text" v-model:count="count"></my-input></p>
</template>

<script setup>
import { reactive, ref } from "vue";
import Counter from "@/components/Counter.vue";
import MyInput from "@/components/MyInput.vue";

const count = ref(0)
const text = ref('asd')

const color = ref('yellow')
const target = ref('background')
</script>