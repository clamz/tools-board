<template>

 <v-list light subheader class="todo-sub-list">
  <v-subheader>{{ groupTitle }}</v-subheader>
  <draggable v-model="todoList" class="todo-sub-list__draggable" :options="{group:'todoList'}" @change="onDrop">
    <todo v-for="todo in todoList" :key="todo._id" :todo="todo" :checked="true" @remove="removeTodo"></todo>
  </draggable>
</v-list>

</template>

<script>
import axios from 'axios'
import { remove } from 'lodash'
import Todo from './TodoView.vue'

import draggable from 'vuedraggable'

export default {
  components: {
    Todo,
    draggable
  },
  data () {
    return {
      todoList: this.list || []
    }
  },
  props: ['groupTitle', 'list', 'state'],
  methods: {
    onDrop: function (e) {
      if (e.added) {
        const todo = e.added.element
        const state = this.state
        axios
          .post(`/api/todos/${todo._id}/state`, { state })
          .then((response) => {
            todo.state = state
          })
      }
    },
    removeTodo: function (todo) {
      axios.delete(`/api/todos/${todo._id}`).then(() => {
        this.todoList = remove(this.todoList, (t) => {
          return t._id !== todo._id
        })
      })
    }
  },
  watch: {
    list: function () {
      this.todoList = this.list
    }
  }

}
</script>

<style lang="scss">
  .todo-sub-list {
    flex: 1;

    .sortable-ghost {
      margin-left: 20px;
    }
    &__draggable {
      min-height: 80px;
    }
  }
</style>

