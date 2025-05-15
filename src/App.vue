<script setup>

</script>

<template>
  <section class="todoapp">
    <header class="header"><a aria-current="page" href="#/" class="router-link-active router-link-exact-active">
        <h1>todos</h1>
      </a><input type="text" class="new-todo" autofocus="" autocomplete="off" placeholder="What needs to be done?">
    </header>
    <main class="main">
      <div class="toggle-all-container"><input type="checkbox" id="toggle-all-input" class="toggle-all"><label
          class="toggle-all-label" for="toggle-all-input"> Toggle All Input </label></div>
      <ul class="todo-list">
        <li class="">
          <div class="view"><input type="checkbox" class="toggle"><label>one</label><button class="destroy"></button>
          </div>
          <div class="input-container"><input id="edit-todo-input" type="text" class="edit"><label
              class="visually-hidden" for="edit-todo-input">Edit Todo Input</label></div>
        </li>
        <li class="completed">
          <div class="view"><input type="checkbox" class="toggle" checked><label>two</label><button
              class="destroy"></button>
          </div>
          <div class="input-container"><input id="edit-todo-input" type="text" class="edit"><label
              class="visually-hidden" for="edit-todo-input">Edit Todo Input</label></div>
        </li>
        <li class="">
          <div class="view"><input type="checkbox" class="toggle"><label>three</label><button class="destroy"></button>
          </div>
          <div class="input-container"><input id="edit-todo-input" type="text" class="edit"><label
              class="visually-hidden" for="edit-todo-input">Edit Todo Input</label></div>
        </li>
      </ul>
    </main>
    <footer class="footer" style=""><span class="todo-count"><strong>2</strong> items left </span>
      <ul class="filters">
        <li><a aria-current="page" href="#/" class="selected">All</a></li>
        <li><a href="#/active" class="">Active</a></li>
        <li><a href="#/completed" class="">Completed</a></li>
      </ul><button class="clear-completed" style="">Clear Completed</button>
    </footer>
  </section>
  <footer class="info">
    <p>Double-click to edit a todo</p>
    <p>Created by the TodoMVC Team</p>
    <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
  </footer>
</template>
