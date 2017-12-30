<template>
  <div class="doc-tool">
    <div class="doc-tool__menu">
      <doc-tool-menu :items="items" @item-selected="onItemSelected"></doc-tool-menu>
    </div>
    <div class="doc-tool__content">
      <doc-tool-content :item="item"></doc-tool-content>
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
  },
  data () {
    return {
      items: [
        {
          action: 'mouse',
          title: 'Todo',
          items: [{
            action: '',
            title: 'test',
            content: `#Test
*Markdonw*
`
          }]
        }, {
          action: '',
          title: 'Doc'
        }
      ],
      item: {}
    }
  },
  methods: {
    onItemSelected: function (item) {
      this.item = item
    }
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
