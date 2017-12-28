<template>
  <v-list-tile avatar class="todo">
    <v-list-tile-content>
      <v-list-tile-title class="todo__title">
        <span class="todo__label">{{ todo.label }}</span>
        <span @click.prevent.stop="removeTodo" class="todo__remove-icon"><v-icon>close</v-icon></span>
      </v-list-tile-title>
    </v-list-tile-content>
  </v-list-tile>
</template>

<script>
export default {
  props: ['todo'],
  methods: {
    removeTodo: function () {
      this.$emit('remove', this.todo)
    }
  }
}
</script>

<style lang="scss">
  @import 'colors';*
  .todo {
    cursor: move;
    background: $primary-color;
    transition: all 0.2s;
    margin: 5px;

    &__label, .todo__remove-icon .icon {
      color: $text-secondary-color !important;
    }
    &:hover {
      // border-left: 5px solid $secondary-color;
      // margin-left: 16px;
      background: $primary-light-color;
    }

    &__title {
      display: flex;
    }

    &__label {
      flex: 1;
    }
  }
</style>
