import Vue from 'vue'
import Router from 'vue-router'
import Vuex from 'vuex'
import Hello from '@/components/Hello'
import TodoList from '@/components/todo-list/TodoListView.vue'

Vue.use(Router)
Vue.use(Vuex)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: TodoList
    },
    {
      path: '/test',
      name: 'Test',
      component: Hello
    }
  ]
})
