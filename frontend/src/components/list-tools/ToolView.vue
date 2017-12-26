<template>
  <span class="tool">
    <span class="tool__icon">
      <v-icon dark>{{ tool.icon }}</v-icon>
    </span>
    <span class="tool__label" :class="{ 'tool__label--show': showLabel }">{{ tool.label }}</span>
    </span>
</template>

<script>
export default {
  props: ['tool', 'showLabel']
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

