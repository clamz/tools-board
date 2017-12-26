<template>
  <div class="todo-list">
    <v-list light subheader>
      <v-subheader>Todo</v-subheader>
      <todo v-for="todo in listTodo" :key="todo._id" :todo="todo" @updateChecked="onUpdateChecked" @remove="removeTodo"></todo>
    </v-list>
    <v-divider></v-divider>
    <v-list light subheader>
      <v-subheader>Done</v-subheader>
      <todo v-for="todo in listDone" :key="todo._id" :todo="todo" :checked="true" @updateChecked="onUpdateChecked" @remove="removeTodo"></todo>
    </v-list>
    <v-btn fab fixed right bottom @click="dialogOpen=true" color="teal">
      <v-icon>add</v-icon>
    </v-btn>

    <todo-create :open="dialogOpen" @close="dialogOpen = false" @save="this.addTodo"></todo-create>
  </div>
</template>

<script>
import { filter, find, remove } from 'lodash'

import Todo from './TodoView.vue'
import axios from 'axios'
import TodoCreate from './TodoCreateView.vue'

export default {
  components: {
    Todo,
    TodoCreate
  },
  methods: {
    onUpdateChecked: function (todo, checked) {
      const currentTodo = find(this.todoList, (t) => {
        return t._id === todo._id
      })
      currentTodo.checked = checked
      console.log(todo)
      if (checked) {
        axios.post(`/api/todos/${todo._id}/check`).then((response) => {

        })
      } else {
        axios.post(`/api/todos/${todo._id}/uncheck`).then((response) => {

        })
      }
    },
    addTodo: function (text) {
      const data = {
        label: text,
        checked: false
      }

      axios.post('http://localhost:8080/api/todos', data).then((response) => {
        const todo = response.data
        this.todoList.push(todo)
      })
    },
    removeTodo: function (todo) {
      axios.delete(`/api/todos/${todo._id}`).then(() => {
        this.todoList = remove(this.todoList, (t) => {
          return t._id !== todo._id
        })
      })
    }
  },
  data () {
    return {
      todoList: [],
      notifications: false,
      dialogOpen: false
    }
  },
  created () {
    axios.get('/api/todos').then((response) => {
      console.log(response.data)
      this.todoList = response.data
    })
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
