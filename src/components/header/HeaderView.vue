<template>
  <header
    class="header"
    :class="{'header--small': !isLarge, 'header--large': isLarge }"
    @mouseenter="mouseEnter"
    @mouseleave="mouseLeave">
   <nav class="header__nav">
     <list-tools-view :is-large="isLarge"></list-tools-view>
   </nav>


    <button class="header__tool-add">
      <v-icon dark>add</v-icon>
    </button>
  </header>
</template>


<script>
import ListToolsView from '../list-tools/ListToolsView.vue'

export default {
  components: {
    ListToolsView
  },
  data: () => ({
    isLarge: false
  }),
  methods: {
    mouseEnter () {
      clearTimeout(this.currentTimeout)
      this.currentTimeout = setTimeout(() => {
        this.isLarge = true
      }, 300)
    },
    mouseLeave () {
      clearTimeout(this.currentTimeout)
      this.currentTimeout = setTimeout(() => { this.isLarge = false }, 300)
    }
  },
  watch: {
    isLarge () {
      console.log('hey')
      if (this.isLarge) {
        this.$store.dispatch('headerOpen')
      } else {
        this.$store.dispatch('headerClose')
      }
    }
  }
}
</script>

<style lang="scss">
  @import 'colors';
  .header {
    height: 100%;
    background: $primary-color;
    position: fixed;
    color: white;
    width: 150px;
    transition: width 0.2s;
    &--small {
      width: 60px;
      overflow: hidden;

    }
    &__tool-add {
      width: 100%;
      padding: 5px;
      text-align: center;
      border-top: 1px $primary-light-color solid;
      position: absolute;
      bottom:0;
      transition: background 0.2s;
      &:hover {
        background: $primary-light-color;
      }
    }
  }

  .header-tools {
    &__item {

    }
  }

</style>
