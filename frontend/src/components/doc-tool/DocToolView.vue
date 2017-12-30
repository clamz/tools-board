<template>
  <div class="doc-tool">
    <div class="doc-tool__menu">
      <doc-tool-menu></doc-tool-menu>
    </div>
    <div class="doc-tool__content">
      <doc-tool-content></doc-tool-content>
    </div>
  </div>

</template>

<script>
import DocToolMenu from './DocToolMenuView.vue'
import DocToolContent from './DocToolContentView.vue'

export default {
  components: {
    DocToolMenu,
    DocToolContent
  }
}
</script>

<style lang="scss">
  .doc-tool {
    &__content {
      margin: 0 0 0 300px;
    }
  }
</style>
