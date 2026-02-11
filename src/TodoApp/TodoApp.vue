<template>
  <section class="todoapp">
    <TodoHeader
      @new-todo="addTodo($event)"
      @clear-all="clearAll"
    />

    <main class="main">
      <TodoToggleAll />
      <ul class="todo-list">
        <TodoItem
          data-test-id="todo-item"
          v-for="todo in filteredTodos"
          :key="todo.id"
          :todoItem="todo"
          @toggle-todo="todo.isCompleted = !todo.isCompleted"
          @edit-title="editTodoTitle(todo.id, $event)"
          @delete="deleteTodo(todo.id)"
        />
      </ul>
    </main>
    <TodoFooter
      :left="left"
      @set-filter="filter = $event"
    />
  </section>
  <footer class="info">
    <p>Double-click to edit a todo</p>
    <p>Created by the TodoMVC Team</p>
    <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
  </footer>
</template>

<script setup>
import { computed, reactive, ref } from 'vue'
import TodoFooter from './TodoFooter.vue'
import TodoHeader from './TodoHeader.vue'
import TodoItem from './TodoItem.vue'
import TodoToggleAll from './TodoToggleAll.vue'

const todos = reactive([
  {
    id: 1,
    title: 'Buy PC',
    isCompleted: false,
  },
  {
    id: 2,
    title: 'Buy VueJS Course',
    isCompleted: true,
  },
  {
    id: 3,
    title: 'Learn new stuff',
    isCompleted: false,
  },
])

const filter = ref('all')

const filteredTodos = computed(() => {
  switch (filter.value) {
    case 'all':
      return todos
    case 'active':
      return todos.filter((t) => t.isCompleted === false)
    case 'completed':
      return todos.filter((t) => t.isCompleted === true)
  }
})

const left = computed(() => todos.filter((t) => t.isCompleted === false).length)

function addTodo(title) {
  todos.push({
    id: Math.random(),
    title,
    isCompleted: false,
  })
}

function editTodoTitle(id, newTitle) {
  const todoItem = todos.find((t) => t.id === id)
  todoItem.title = newTitle
}

function clearAll() {
  todos.length = 0
}

function deleteTodo(todoId) {
  const index = todos.findIndex((t) => t.id === todoId)
  todos.splice(index, 1)
}
</script>
