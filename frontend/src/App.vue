<template>
  <div id="app">
    <v-app>
      <header-view></header-view>
      <main class="content" :class="{'content--header-opened': headerIsOpen }">
        <img src="./assets/logo.png" alt="Vue.js PWA">
        <router-view></router-view>
      </main>
    </v-app>
  </div>
</template>

<script>

import Vuex from 'vuex'
import HeaderView from './components/header/HeaderView.vue'

export default {
  name: 'app',
  components: {
    HeaderView
  },
  computed: {
    ...Vuex.mapGetters(['headerIsOpen'])
  }
}
</script>

<style lang="scss">

@import 'colors';
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $text-color;
}

main {
}

.content {
  padding-left: 20px;
  margin-left: 60px;
  transition: margin-left 0.2s;
  &--header-opened {
    margin-left: 150px;
  }
}

.card {
    background-color: #fff;
    color: $text-color;
}
</style>
