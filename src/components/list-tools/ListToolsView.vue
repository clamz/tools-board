<template>
  <div class="list-tools" >
    <ul>
      <li v-for="tool in tools" :key="tool._id" class="list-tools__tool" :class="{ 'tool--large': isLarge }">
        <tool :tool="tool" :show-label="isLarge"></tool>
      </li>
    </ul>
  </div>
</template>

<script>

import Vuex from 'vuex'
import Tool from './ToolView.vue'

export default {
  components: {
    Tool
  },
  props: ['isLarge'],
  created () {
    this.$store.dispatch('initTools')
  },
  computed: {
    ...Vuex.mapGetters(['tools'])
  }
}
</script>

<style lang="scss">

  @import 'colors';
  .list-tools {
    &__tool {
      padding: 10px 15px;
      cursor: pointer;
      white-space: nowrap;

      &:hover {
        background: $primary-light-color;
      }

      &--large {
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
  }
</style>

