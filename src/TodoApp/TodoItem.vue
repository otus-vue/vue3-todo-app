<template>
  <li :class="{ completed: todoItem.isCompleted, editing: isEditing }">
    <div class="view">
      <input
        type="checkbox"
        class="toggle"
        :checked="todoItem.isCompleted"
        @input="$emit('toggle-todo')"
      />
      <label @dblclick="startEditing">{{ todoItem.title }}</label>
      <button
        class="destroy"
        @click="$emit('delete')"
      ></button>
    </div>
    <div class="input-container">
      <input
        id="edit-todo-input"
        type="text"
        class="edit"
        v-model="text"
        @blur="stopEditing"
        @keydown.enter="stopEditing"
      /><label
        class="visually-hidden"
        for="edit-todo-input"
        >Edit Todo Input</label
      >
    </div>
  </li>
</template>

<script setup>
import { computed, ref, useAttrs } from 'vue'

const props = defineProps(['todoItem'])

const isEditing = ref(false)

const text = ref(props.todoItem.title)

const emit = defineEmits(['toggle-todo', 'edit-title', 'delete'])

function startEditing() {
  isEditing.value = true
}

function stopEditing() {
  isEditing.value = false
  emit('edit-title', text.value)
}
</script>
