<script setup>
import TodoFooter from "./components/TodoApp/TodoFooter.vue";
import TodoItem from "./components/TodoApp/TodoItem.vue";
import TodoFilter from "./components/TodoApp/TodoFilter.vue";
import TodoInput from "./components/TodoApp/TodoInput.vue";

import { computed, reactive, ref, shallowRef } from "vue";

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
]);

const todosRef = shallowRef([
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
]);

console.log(todosRef.value[0]);

function setCompleted(id, newCompleted) {
  todos.find((todo) => todo.id === id).isCompleted = newCompleted;
}
function setTitle(id, newTitle) {
  todos.find((todo) => todo.id === id).title = newTitle;
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
    case "active":
      return todos.filter((t) => !t.isCompleted);
    case "completed":
      return todos.filter((t) => t.isCompleted);
  }
});

function deleteTodo(todoId) {
  const index = todos.findIndex((todo) => todo.id == todoId);
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
        <todo-item
          v-for="todo in filteredTodos"
          :key="todo.id"
          @set-completed="setCompleted(todo.id, $event)"
          @set-title="setTitle(todo.id, $event)"
          @delete-todo="deleteTodo(todo.id)"
          :todo="todo"
        ></todo-item>
      </ul>
    </main>
    <todo-filter
      @set-filter="filter = $event"
      :left="left"
    ></todo-filter>
  </section>
  <todo-footer></todo-footer>
</template>
