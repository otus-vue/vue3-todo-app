<template>
  <section class="todoapp">
    <todo-input @add-todo="addTodo" />
    <section class="main">
      <input id="toggle-all" class="toggle-all" type="checkbox">
      <label for="toggle-all">Mark all as complete</label>
      <ul class="todo-list">
        <todo-item v-for="todo in filteredTodos" :key="todo.id" :todo="todo"
          @toggle-todo="toggleTodo(todo.id)"
                   @delete-todo="deleteTodo(todo.id)"
        ></todo-item>
      </ul>
    </section>
    <todo-filter
        @set-filter="setFilter"
        :left="left"
    ></todo-filter>
  </section>
  <todo-footer></todo-footer>
</template>


<script setup>
import TodoItem from "@/components/TodoApp/TodoItem.vue";
import TodoFooter from "@/components/TodoApp/TodoFooter.vue";
import TodoFilter from "@/components/TodoApp/TodoFilter.vue";
import TodoInput from "@/components/TodoApp/TodoInput.vue";
import { computed, reactive, ref } from "vue";

const todos = reactive([
    {
      id: 1,
      title: 'NodeJs',
      isCompleted: false
    },
    {
      id: 2,
      title: 'ExpressJS',
      isCompleted: true
    },
    {
      id: 3,
      title: 'VueJS',
      isCompleted: false
    },
])

const left = computed(() => {
  return todos.filter(todo => !todo.isCompleted).length
})

function toggleTodo(todoId) {
  const todo = todos.find((todo) => todo.id === todoId)
  todo.isCompleted = !todo.isCompleted
}

function addTodo(newTitle) {
  todos.push({
    id: Math.random(),
    title: newTitle,
    isCompleted: false
  })
}

function deleteTodo(todoId) {
  const index = todos.findIndex((todo) => todo.id === todoId)
  todos.splice(index,1)
}

const filter = ref('all')

const filteredTodos = computed(() => {
  switch (filter.value) {
    case 'all': return todos;
    case 'completed': return todos.filter(todo => todo.isCompleted)
    case 'active': return todos.filter(todo => !todo.isCompleted)
  }
})

function setFilter(newFilter) {
  filter.value = newFilter
}
</script>