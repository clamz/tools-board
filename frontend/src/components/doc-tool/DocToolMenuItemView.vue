<template>
  <div class="doc-tool-menu-item">
    <v-list-tile-action>
      <v-icon>{{ item.action }}</v-icon>
    </v-list-tile-action>
    <v-list-tile-content>
      <v-list-tile-title>{{ item.title }}</v-list-tile-title>
    </v-list-tile-content>
    <v-list-tile-action v-if="item.items">
      <v-icon>keyboard_arrow_down</v-icon>
    </v-list-tile-action>
  </div>
</template>

<script>
export default {
  props: ['item']
}
</script>

<style lang="scss">
  .doc-tool-menu-item {
    display: flex;
    width: 100%;
  }
</style>
