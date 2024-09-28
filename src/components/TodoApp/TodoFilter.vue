<template>
  <footer class="footer">
    <span class="todo-count">{{ left }} left</span>
    <ul class="filters">
      <li>
        <a href="#/" :class="{ selected: filter === 'all' }"
           @click="$emit('set-filter', 'all')">All</a>
      </li>
      <li>
        <a href="#/active" :class="{ selected: filter === 'active' }"
           @click="$emit('set-filter', 'active')">Active</a>
      </li>
      <li>
        <a href="#/completed" :class="{ selected: filter === 'completed' }"
           @click="$emit('set-filter', 'completed')">Completed</a>
      </li>
    </ul>
    <button class="clear-completed" @click="$emit('clear-completed')">Clear completed</button>
  </footer>
</template>

<script setup>
defineProps(['filter', 'left'])
</script>