<template>
  <footer
    class="footer"
    style=""
  >
    <span class="todo-count"
      ><strong>{{ left }}</strong> items left
    </span>
    <ul class="filters">
      <li>
        <a
          aria-current="page"
          href="#/"
          @click="$emit('set-filter', 'all')"
          >All</a
        >
      </li>
      <li>
        <a
          href="#/active"
          class=""
          @click="$emit('set-filter', 'active')"
          >Active</a
        >
      </li>
      <li>
        <a
          href="#/completed"
          class=""
          @click="$emit('set-filter', 'completed')"
          >Completed</a
        >
      </li>
    </ul>
    <button
      class="clear-completed"
      style=""
    >
      Clear Completed
    </button>
  </footer>
</template>

<script setup>
defineProps(['left'])

defineEmits(['set-filter'])
</script>
