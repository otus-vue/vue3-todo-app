<script setup>
import { computed, reactive, ref } from "vue";

import TodoFilter from "./TodoApp/TodoFilter.vue";
import TodoFooter from "./TodoApp/TodoFooter.vue";
import TodoInput from "./TodoApp/TodoInput.vue";
import TodoItem from "./TodoApp/TodoItem.vue";

const todos = reactive([
  {
    id: 1,
    title: "one",
    isCompleted: false,
  },
  {
    id: 2,
    title: "two",
    isCompleted: true,
  },
  {
    id: 3,
    title: "three",
    isCompleted: false,
  },
]);

function toggleCompleted(todoId) {
  const todo = todos.find((t) => t.id === todoId);
  todo.isCompleted = !todo.isCompleted;
}
function setTitle(todoId, newTitle) {
  const todo = todos.find((t) => t.id === todoId);
  todo.title = newTitle;
}

function createTodo(title) {
  todos.push({
    id: Math.random(),
    title,
    isCompleted: false,
  });
}

const left = computed(() => todos.filter((t) => !t.isCompleted).length);

const filter = ref("all");

const filteredTodos = computed(() => {
  switch (filter.value) {
    case "all":
      return todos;
    case "completed":
      return todos.filter((t) => t.isCompleted);
    case "active":
      return todos.filter((t) => !t.isCompleted);
  }
});

function deleteTodo(todoId) {
  const index = todos.findIndex((t) => t.id === todoId);
  todos.splice(index, 1);
}
</script>

<template>
  <section class="todoapp">
    <TodoInput @create-todo="createTodo"></TodoInput>
    <main class="main">
      <div class="toggle-all-container">
        <input
          type="checkbox"
          id="toggle-all-input"
          class="toggle-all"
        /><label
          class="toggle-all-label"
          for="toggle-all-input"
        >
          Toggle All Input
        </label>
      </div>
      <ul class="todo-list">
        <TodoItem
          v-for="todo in filteredTodos"
          :key="todo.id"
          :todo="todo"
          @toggle="toggleCompleted(todo.id)"
          @set-title="setTitle(todo.id, $event)"
          @delete-todo="deleteTodo(todo.id)"
        ></TodoItem>
      </ul>
    </main>
    <TodoFilter
      @set-filter="filter = $event"
      :left="left"
    ></TodoFilter>
  </section>
  <TodoFooter></TodoFooter>
</template>
