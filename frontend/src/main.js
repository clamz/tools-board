// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import VueWebsocket from 'vue-websocket'

import 'vuetify/dist/vuetify.min.css'

Vue.use(VueWebsocket, 'ws://localhost:8081')

Vue.use(Vuetify, {
  theme: {
    primary: '#1976d2',
    secondary: 'yellow',
    accent: '#1976d2',
    error: 'green'
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
