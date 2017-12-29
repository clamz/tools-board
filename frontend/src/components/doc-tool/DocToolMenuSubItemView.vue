<template>
  <div class="doc-tool-sub-menu-item">
    <v-list-tile-content>
      <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
    </v-list-tile-content>
    <v-list-tile-action>
      <v-icon>{{ subItem.action }}</v-icon>
    </v-list-tile-action>
  </div>
</template>

<script>
export default {
  props: ['subItem']
}
</script>

<style lang="scss">
  .doc-tool-sub-menu-item {
    display: flex;
    width: 100%;
  }
</style>
