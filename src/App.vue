<template>
  <section class="todoapp">
    <todo-input @add-todo="addTodo"></todo-input>
    <section class="main">
      <input id="toggle-all"
             class="toggle-all"
             type="checkbox">
      <label for="toggle-all">Mark all as complete</label>
      <ul class="todo-list">
        <todo-item v-for="todo in todos"
                   :key="todo.id"
                   :todo="todo"
                   @change-completed="changeCompleted"
                   @change-text="changeText(todo.id, $event)"
                   @delete-todo="deleteTodo(todo.id)"
        ></todo-item>
      </ul>
    </section>
    <todo-filter :left="left"></todo-filter>
  </section>
  <todo-footer />
</template>


<script setup>
import TodoItem from "@/components/TodoApp/TodoItem.vue"
import TodoFooter from "@/components/TodoApp/TodoFooter.vue"
import TodoFilter from "@/components/TodoApp/TodoFilter.vue"
import TodoInput from "@/components/TodoApp/TodoInput.vue"
import { computed, reactive, ref } from "vue";

const todos = reactive([
  {
    id: 1,
    title: 'Купить ноут',
    isCompleted: false
  },
  {
    id: 2,
    title: 'Включить ноут',
    isCompleted: false
  },
  {
    id: 3,
    title: 'Изучить VueJS',
    isCompleted: true
  }
])

function addTodo(newTitle) {
  todos.push({
    id: todos.length + 1,
    title: newTitle,
    isCompleted: false
  })
}

function changeCompleted(todoId) {
  const item = todos.find((todo) => todo.id === todoId)
  item.isCompleted = !item.isCompleted
}

function changeText(todoId, newText) {
  const item = todos.find((todo) => todo.id === todoId)
  item.title = newText
}

function deleteTodo(todoId) {
  // const index = todos.findIndex((todo) => todo.id === todoId)
  // todos.splice(index, 1)

  todos.value = todos.filter((todo) => todo.id !== todoId)
}

const left = computed(() => todos.filter(todo => !todo.isCompleted).length)

</script>