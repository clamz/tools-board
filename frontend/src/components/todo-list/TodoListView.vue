<template>
  <div class="todo-list">
    <todo-list-sub-list group-title="Todo" :list="listTodo" :state="states.TODO"></todo-list-sub-list>
    <todo-list-sub-list group-title="In progress" :list="listInProgress" :state="states.IN_PROGRESS"></todo-list-sub-list>
    <todo-list-sub-list group-title="Done" :list="listDone" :state="states.DONE"></todo-list-sub-list>
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

const STATES = {
  TODO: 'todo',
  IN_PROGRESS: 'in_progress',
  DONE: 'done'
}

export default {
  components: {
    TodoCreate,
    TodoListSubList
  },
  /**
   * Get todos before render the template
   */
  beforeRouteEnter (to, from, next) {
    axios.get('/api/todos').then((response) => {
      next(vm => vm.setData(response.data))
    })
  },
  data () {
    return {
      states: STATES,
      todoList: [],
      listTodo: [],
      listInProgress: [],
      listDone: [],
      notifications: false,
      dialogOpen: false
    }
  },
  methods: {
    setData (todoList) {
      this.todoList = todoList

      this.listTodo = filter(this.todoList, (t) => {
        return t.state === STATES.TODO
      })

      this.listInProgress = filter(this.todoList, (t) => {
        return t.state === STATES.IN_PROGRESS
      })

      this.listDone = filter(this.todoList, (t) => {
        return t.state === STATES.DONE
      })
    },

    /**
     * Create a new todo
     */
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
