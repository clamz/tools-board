<template>
  <div class="doc-tool-menu">
    <v-navigation-drawer dark fixed class="doc-tool-menu__nav-drawer">
      <v-list>
        <v-list-group v-for="item in items" :value="item.active" v-bind:key="item.title">

          <v-list-tile slot="item" @click="onItemClick(item)">
            <doc-tool-menu-item :item="item"></doc-tool-menu-item>
          </v-list-tile>

          <v-list-tile v-for="subItem in item.items" v-bind:key="subItem.title" @click.stop="onItemClick(subItem)">
            <sub-menu-item :sub-item="subItem"></sub-menu-item>
          </v-list-tile>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import DocToolMenuItem from './DocToolMenuItemView.vue'
import SubMenuItem from './DocToolMenuSubItemView.vue'

export default {
  components: {
    DocToolMenuItem,
    SubMenuItem
  },
  props: ['items'],
  methods: {
    onItemClick: function (item) {
      // emit the click only if the item doesn't have childs
      if (item && !item.items) {
        this.$emit('item-selected', item)
      }
    }
  }
}
</script>

<style lang="scss">
  .doc-tool-menu {
    margin: -20px 20px -20px -20px;
    width: 280px;
    &__nav-drawer {
      left: 60px;
    }
  }
</style>

