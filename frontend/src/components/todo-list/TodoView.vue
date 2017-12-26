<template>
  <v-list-tile avatar @click.prevent.stop="toggleCheckbox" class="todo" :class="{ 'todo--checked': isChecked }">
    <v-list-tile-action>
      <v-checkbox v-model="isChecked" @click.prevent.stop="toggleCheckbox"></v-checkbox>
    </v-list-tile-action>
    <v-list-tile-content>
      <v-list-tile-title>{{ todo.label }}</v-list-tile-title>
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
    }
  }
}
</script>

<style lang="scss">
  .todo {
    &--checked {
      text-decoration: line-through;
    }
  }
</style>
