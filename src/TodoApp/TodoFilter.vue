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
          @click="$emit('set-filter', 'all')"
          aria-current="page"
          href="#/"
          class="selected"
          >All</a
        >
      </li>
      <li>
        <a
          @click="$emit('set-filter', 'active')"
          href="#/active"
          class=""
          >Active</a
        >
      </li>
      <li>
        <a
          @click="$emit('set-filter', 'completed')"
          href="#/completed"
          class=""
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
defineProps(["left"]);
</script>
