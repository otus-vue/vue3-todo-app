<template>
  <li class="todo" :class="{ completed: todo.isCompleted, editing: isEditing }"
      @dblclick="isEditing = true">
    <div class="view">
      <input class="toggle" type="checkbox" :checked="todo.isCompleted" @input="toggleCompleted" />
      <label>{{ todo.title }} #{{ todo.id }}</label>
      <button class="destroy" @click="$emit('delete-todo', todo.id)"></button>
    </div>
    <input class="edit" type="text" v-model="text"
           @blur="saveValue"
           @keyup.enter="saveValue" />
  </li>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps(['todo'])

const emit = defineEmits(['toggle-completed', 'delete-todo', 'update-text'])

const isEditing = ref(false)

function toggleCompleted() {
  emit('toggle-completed', props.todo.id)
}

const text = ref(props.todo.title)

function saveValue() {
  isEditing.value = false
  emit('update-text', text.value)
}
</script>