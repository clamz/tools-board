<template>
  <div class="tool" @click="goToTool">
    <span class="tool__icon">
      <v-icon dark>{{ tool.icon }}</v-icon>
    </span>
    <span class="tool__label" :class="{ 'tool__label--show': showLabel }">{{ tool.label }}</span>
    </div>
</template>

<script>
export default {
  props: ['tool', 'showLabel'],
  methods: {
    goToTool: function () {
      if (!this.tool.routeName) return
      this.$router.push({ name: this.tool.routeName })
    }
  }
}
</script>

<style lang="scss">
  .tool {
    &__icon {
      display: inline-block;
    }

    &__label {
      opacity: 0;
      margin-left: 15px;

      transition: opacity 0.2s;
      &--show {
        // display: inline-block;
        opacity: 1;
      }
    }
  }
</style>

