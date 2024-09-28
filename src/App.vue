<template>
  <section class="todoapp">
    <TodoHeader @add-todo="addTodo"></TodoHeader>
    <section class="main">
      <input id="toggle-all" class="toggle-all" type="checkbox" @input="setCompletedAll($event.target.checked)">
      <label for="toggle-all">Mark all as complete</label>
      <ul class="todo-list">
        <TodoItem v-for="todo in filteredTodos" :key="todo.id" :todo="todo"
                  @toggle-completed="toggleCompleted"
                  @delete-todo="deleteTodo"
                  @update-text="updateText(todo.id, $event)"
        ></TodoItem>
      </ul>
    </section>
    <TodoFilter :filter="filter" :left="left"
                @set-filter="setFilter"
                @clear-completed="clearCompleted"
    ></TodoFilter>
  </section>
  <TodoFooter></TodoFooter>
</template>


<script setup>
import TodoHeader from "@/components/TodoApp/TodoHeader.vue";
import TodoFooter from "@/components/TodoApp/TodoFooter.vue";
import TodoFilter from "@/components/TodoApp/TodoFilter.vue";
import TodoItem from "@/components/TodoApp/TodoItem.vue";
import { computed, reactive, ref } from "vue";

const todos = reactive([
    {
      id: 1,
      title: 'One',
      isCompleted: false
    },
    {
      id: 2,
      title: 'Two',
      isCompleted: true
    },
    {
      id: 3,
      title: 'Three',
      isCompleted: false
    },
])

const filter = ref('all')

const filteredTodos = computed(() => {
  switch (filter.value) {
    case 'all': return todos;
    case 'active': return todos.filter(t => !t.isCompleted);
    case 'completed': return todos.filter(t => t.isCompleted);
  }
})

const left = computed(() => {
  return todos.filter(t => !t.isCompleted).length
})

function toggleCompleted(todoId) {
  const todo = todos.find(t => t.id === todoId)
  todo.isCompleted = !todo.isCompleted
}

function addTodo(newTitle) {
  todos.push({
    id: todos.length + 1,
    title: newTitle,
    isCompleted: false
  })
}

function deleteTodo(todoId) {
  const index = todos.findIndex((v) => v.id === todoId)
  todos.splice(index, 1)
}

function updateText(todoId, newTitle) {
  const todo = todos.find(t => t.id === todoId)
  todo.title = newTitle
}

function setFilter(newFilter) {
  filter.value = newFilter
}

function clearCompleted() {
  todos.filter(v => v.isCompleted).map(t => t.id).forEach(todoId => deleteTodo(todoId))
}

function setCompletedAll(bool) {
  todos.forEach(todo => todo.isCompleted = bool)
}
</script>