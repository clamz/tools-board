<template>
  <div class="todo-list">
    <v-list light subheader>
      <v-subheader>Todo</v-subheader>
      <todo v-for="todo in listTodo" :key="todo.id" :todo="todo" @updateChecked="onUpdateChecked"></todo>
    </v-list>
    <v-divider></v-divider>
    <v-list light subheader>
      <v-subheader>Done</v-subheader>
      <todo v-for="todo in listDone" :key="todo.id" :todo="todo" :checked="true" @updateChecked="onUpdateChecked"></todo>
    </v-list>
    <v-btn fab fixed right bottom @click="dialogOpen=true" color="teal">
      <v-icon>add</v-icon>
    </v-btn>

    <todo-create :open="dialogOpen" @close="dialogOpen = false" @save="this.addTodo"></todo-create>
  </div>
</template>

<script>
import { filter, find } from 'lodash'

import Todo from './TodoView.vue'
import TodoCreate from './TodoCreateView.vue'

export default {
  components: {
    Todo,
    TodoCreate
  },
  methods: {
    onUpdateChecked: function (todo, checked) {
      const currentTodo = find(this.todoList, (t) => {
        return t.id === todo.id
      })
      currentTodo.checked = checked
    },
    addTodo: function (text) {
      this.todoList.push({
        id: `todo-${this.todoList.length + 1}`,
        label: text,
        checked: false
      })
    }
  },
  data () {
    return {
      notifications: false,
      todoList: [{
        id: 'todo-1',
        label: 'Refactor plugin',
        checked: false
      }, {
        id: 'todo-2',
        label: 'Change style fo button',
        checked: false
      }, {
        id: 'todo-3',
        label: 'initialize project',
        checked: true
      }],
      dialogOpen: false
    }
  },
  computed: {
    listTodo () {
      return filter(this.todoList, (t) => {
        return !t.checked
      })
    },
    listDone () {
      return filter(this.todoList, (todo) => {
        return todo.checked
      })
    }
  }
}
</script>

<style lang="scss">
  @import 'colors';
  .todo-list {
    .btn {
      background-color: $secondary-color;
      &__content {
        color: $text-secondary-color !important;
      }
    }
  }
</style>
