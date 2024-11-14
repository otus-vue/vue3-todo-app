<script setup>
defineProps(['todo'])
</script>

<template>
  <li class="todo" :class="{ 'completed': todo.isCompleted }" >
    <div class="view">
      <input class="toggle"
             type="checkbox"
             :checked="todo.isCompleted"
             @input="$emit('toggle-todo')"
      />
      <label>{{ todo.title }} #{{ todo.id }}</label>
      <button class="destroy" @click="$emit('delete-todo')"></button>
    </div>
    <input class="edit" type="text" />
  </li>
</template>