<template>
  <div class="todo-list">
    <todo-list-sub-list group-title="Todo" :list="listTodo" state="todo"></todo-list-sub-list>
    <todo-list-sub-list group-title="In progress" :list="listInProgress" state="in_progress"></todo-list-sub-list>
    <todo-list-sub-list group-title="Done" :list="listDone" state="done"></todo-list-sub-list>
    <v-btn fab fixed right bottom @click="dialogOpen=true" color="custom">
      <v-icon>add</v-icon>
    </v-btn>
    <todo-create :open="dialogOpen" @close="dialogOpen = false" @save="this.addTodo"></todo-create>
  </div>
</template>
<script>
import { filter } from 'lodash'
import axios from 'axios'
import TodoCreate from './TodoCreateView.vue'

import TodoListSubList from './TodoSubListView.vue'

export default {
  components: {
    TodoCreate,
    TodoListSubList
  },
  data () {
    return {
      todoList: [],
      listTodo: [],
      listInProgress: [],
      listDone: [],
      notifications: false,
      dialogOpen: false
    }
  },
  created () {
    axios.get('/api/todos').then((response) => {
      this.todoList = response.data
      return response.data
    }).then(() => {
      this.listTodo = filter(this.todoList, (t) => {
        return t.state === 'todo'
      })

      this.listInProgress = filter(this.todoList, (t) => {
        return t.state === 'in_progress'
      })

      this.listDone = filter(this.todoList, (t) => {
        return t.state === 'done'
      })
    })
  },
  methods: {
    addTodo: function (text) {
      const data = {
        label: text,
        state: 'todo'
      }

      axios.post('/api/todos', data).then((response) => {
        const todo = response.data
        this.todoList.push(todo)
      })
    }
  }
}
</script>

<style lang="scss">
  @import 'colors';
  .todo-list {
    margin-bottom: 50px;
    display: flex;
    flex-direction: row;
    .btn {
      background-color: $secondary-color !important;
      &__content {
        color: $text-secondary-color !important;
      }
    }


  }
</style>
