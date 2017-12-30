<template>
  <div id="app">
    <v-app>
      <header-view></header-view>
      <main class="content" :class="{'content--header-opened': headerIsOpen }">
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
* {
  box-sizing: border-box;
}

#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $text-color;
}

main {
}

.content {
  padding: 20px;
  margin-left: 60px;
  transition: margin-left 0.2s;
}

.card {
    background-color: #fff;
    color: $text-color;
}
</style>
