<template>
  <li :class="{ completed: todo.isCompleted, editing: isEditing }">
    <div class="view">
      <input
        type="checkbox"
        class="toggle"
        @input="toggle"
        :checked="todo.isCompleted"
      />
      <label @dblclick="startEditing">{{ todo.title }}</label>
      <button
        class="destroy"
        @click="deleteTodo"
      ></button>
    </div>
    <div class="input-container">
      <input
        id="edit-todo-input"
        type="text"
        class="edit"
        v-model="newTitle"
        @keyup.enter="finishEditing"
        @blur="finishEditing"
      /><label
        class="visually-hidden"
        for="edit-todo-input"
        >Edit Todo Input</label
      >
    </div>
  </li>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps(["todo"]);

const emit = defineEmits();

const isEditing = ref(false);
const newTitle = ref(props.todo.title);

function startEditing() {
  isEditing.value = true;
}

function toggle() {
  emit("toggle");
}

function finishEditing() {
  emit("set-title", newTitle.value);
  isEditing.value = false;
}

function deleteTodo() {
  emit("delete-todo");
}
</script>
