<script setup>
import { ref } from "vue";

const props = defineProps(['todo'])

const emits = defineEmits()

function changeCompleted() {
  emits('change-completed', props.todo.id)
}

const newText = ref(props.todo.title)

function changeText() {
  emits('change-text', newText.value)
  isEditing.value = false
}

const isEditing = ref(false)
</script>

<template>
  <li class="todo" :class="{ 'completed': todo.isCompleted, 'editing': isEditing }">
    <div class="view" @dblclick="isEditing = true">
      <input class="toggle"
             type="checkbox"
             :checked="todo.isCompleted"
             @input="changeCompleted"
      />
      <label>{{ todo.title }} #{{ todo.id }}</label>
      <button class="destroy" @click="$emit('delete-todo')"></button>
    </div>
    <input class="edit" type="text" v-model="newText"
           @keyup.enter="changeText"
           @blur="changeText"
    />
  </li>
</template>
