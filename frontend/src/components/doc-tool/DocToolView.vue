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
import axios from 'axios'

import DocToolMenu from './DocToolMenuView.vue'
import DocToolContent from './DocToolContentView.vue'

export default {
  components: {
    DocToolMenu,
    DocToolContent
  },
  props: ['id'],
  data () {
    return {
      items: [],
      item: {}
    }
  },

  beforeRouteEnter: (to, from, next) => {
    axios.get('/api/docs').then((response) => {
      next(vm => vm.setData(response.data, to.params.id))
    })
  },

  methods: {
    setData: function (doc, id) {
      this.items = doc
      if (!id) {
        let item = this.items[0]
        if (item.items && item.items.length > 0) {
          item = item.items[0]
        }
        this.item = item
        this.$router.push({ name: 'doc', params: { id: item._id } })
      } else {
        this.items.forEach((item) => {
          if (item.items && item.items.length > 0) {
            item.items.forEach(subItem => {
              this.isCurrentItem(subItem, id)
            })
          } else {
            this.isCurrentItem(item, id)
          }
        })
      }
      this.items.forEach((item) => {
        if (item.items && item.items.length === 0) {
          delete item.items
        }
      })
    },
    isCurrentItem: function (item, id) {
      if (item && item._id === id) this.item = item
    },
    onItemSelected: function (item) {
      this.item = item
      this.$router.push({ name: 'doc', params: { id: item._id } })
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
