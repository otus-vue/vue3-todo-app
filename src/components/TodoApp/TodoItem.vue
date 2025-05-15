<template>
  <li :class="{ completed: todo.isCompleted, editing: isEditing }">
    <div class="view">
      <input
        type="checkbox"
        class="toggle"
        @input="$emit('set-completed', !todo.isCompleted)"
        :checked="todo.isCompleted"
      />
      <label @dblclick="startEditing">{{ todo.title }}</label>
      <button
        class="destroy"
        @click="$emit('delete-todo')"
      ></button>
    </div>
    <div class="input-container">
      <input
        id="edit-todo-input"
        @keyup.enter="saveTitle"
        @blur="saveTitle"
        type="text"
        class="edit"
        v-model="text"
        ref="input"
      />
      <label
        class="visually-hidden"
        for="edit-todo-input"
        >Edit Todo Input</label
      >
    </div>
  </li>
</template>

<script setup>
import { ref, nextTick } from "vue";

const props = defineProps(["todo"]);

const isEditing = ref(false);

const text = ref(props.todo.title);

const emit = defineEmits();

const input = ref();

function startEditing() {
  isEditing.value = true;
  nextTick().then(() => input.value.focus());
}

function saveTitle() {
  emit("set-title", text.value);
  isEditing.value = false;
}
</script>
