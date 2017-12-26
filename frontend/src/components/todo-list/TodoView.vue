<template>
  <v-list-tile avatar @click.prevent.stop="toggleCheckbox" class="todo" :class="{ 'todo--checked': isChecked }">
    <v-list-tile-action>
      <v-checkbox v-model="isChecked" @click.prevent.stop="toggleCheckbox"></v-checkbox>
    </v-list-tile-action>
    <v-list-tile-content>
      <v-list-tile-title class="todo__title">
        <span class="todo__label" :class="{ 'todo__label--checked': isChecked }">{{ todo.label }}</span>
        <span @click.prevent.stop="removeTodo" class="todo__remove-icon"><v-icon>close</v-icon></span>
      </v-list-tile-title>
    </v-list-tile-content>
  </v-list-tile>
</template>

<script>
export default {
  data () {
    return {
      isChecked: this.checked
    }
  },
  props: ['todo', 'checked'],
  methods: {
    toggleCheckbox: function () {
      this.isChecked = !this.isChecked
      this.$emit('updateChecked', this.todo, this.isChecked)
    },
    removeTodo: function () {
      this.$emit('remove', this.todo)
    }
  }
}
</script>

<style lang="scss">
  .todo {
    &__title {
      display: flex;
    }

    &__label {
      flex: 1;
      &--checked {
        text-decoration: line-through;
      }
    }
    &__remove-icon {
      //float: right;
    }
  }
</style>
