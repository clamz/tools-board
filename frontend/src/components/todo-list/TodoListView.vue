<template>
  <div class="todo-list">
    <v-list light subheader class="todo-list__todo">
      <v-subheader>Todo</v-subheader>
      <draggable v-model="listTodo" class="todo-list__draggable" :options="{group:'listTodo'}" @change="setTodoState">
        <todo v-for="todo in listTodo" :key="todo._id" :todo="todo" @remove="removeTodo"></todo>
      </draggable>
    </v-list>
    <v-list light subheader class="todo-list__todo">
      <v-subheader>In progress</v-subheader>
      <draggable v-model="listInProgress" class="todo-list__draggable" :options="{group:'listTodo'}" @change="setInProgressState">
        <todo v-for="todo in listInProgress" :key="todo._id" :todo="todo" :checked="true" @remove="removeTodo"></todo>
      </draggable>
    </v-list>
    <v-list light subheader class="todo-list__todo">
      <v-subheader>Done</v-subheader>
      <draggable v-model="listDone" class="todo-list__draggable" :options="{group:'listTodo'}" @change="setDoneState">
          <todo v-for="todo in listDone" :key="todo._id" :todo="todo" :checked="true" @remove="removeTodo"></todo>
      </draggable>
    </v-list>
    <v-btn fab fixed right bottom @click="dialogOpen=true" color="teal">
      <v-icon>add</v-icon>
    </v-btn>

    <todo-create :open="dialogOpen" @close="dialogOpen = false" @save="this.addTodo"></todo-create>
  </div>
</template>

<script>
import { filter, remove } from 'lodash'
import draggable from 'vuedraggable'

import Todo from './TodoView.vue'
import axios from 'axios'
import TodoCreate from './TodoCreateView.vue'

export default {
  components: {
    Todo,
    TodoCreate,
    draggable
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
    },
    removeTodo: function (todo) {
      axios.delete(`/api/todos/${todo._id}`).then(() => {
        this.todoList = remove(this.todoList, (t) => {
          return t._id !== todo._id
        })
      })
    },
    updateTodoState: function (todo, state) {
      axios
        .post(`/api/todos/${todo._id}/state`, { state })
        .then((response) => {
          todo.state = state
        })
    },
    setTodoState: function (e) {
      if (e.added) {
        this.updateTodoState(e.added.element, 'todo')
      }
    },
    setInProgressState: function (e, o, j) {
      if (e.added) {
        this.updateTodoState(e.added.element, 'in_progress')
      }
    },
    setDoneState: function (e, o, j) {
      if (e.added) {
        this.updateTodoState(e.added.element, 'done')
      }
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
      this.todoList = response.data
    })
  },
  computed: {
    listTodo: {
      get () {
        return filter(this.todoList, (t) => {
          return t.state === 'todo'
        })
      },
      set (todos) {
      }
    },
    listInProgress: {
      get () {
        return filter(this.todoList, (t) => {
          return t.state === 'in_progress'
        })
      },
      set (todos) {
      }
    },
    listDone: {
      get () {
        return filter(this.todoList, (t) => {
          return t.state === 'done'
        })
      },
      set (todos) {
      }
    }
  }
}
</script>

<style lang="scss">
  @import 'colors';
  .todo-list {
    display: flex;
    flex-direction: row;
    .btn {
      background-color: $secondary-color;
      &__content {
        color: $text-secondary-color !important;
      }
    }

    &__draggable {
      min-height: 80px;
    }

    &__todo {
      flex: 1;

      .sortable-ghost {
        margin-left: 20px;
      }
    }
  }
</style>
