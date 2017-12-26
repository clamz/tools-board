<template>
  <v-dialog light v-model="isOpen" max-width="600px">
    <v-card>
      <v-card-title>
        Create a todo
      </v-card-title>
      <v-card-text>
        <v-text-field label="Text" v-model="text" required></v-text-field>
      </v-card-text>
      <v-card-actions>
          <v-spacer></v-spacer>
        <v-btn flat @click.native="isOpen = false">Close</v-btn>
        <v-btn flat @click.native="isOpen = false">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data () {
    return {
      isOpen: this.open
    }
  },
  props: ['open'],
  watch: {
    open: function () {
      this.isOpen = this.open
    },
    isOpen: function () {
      if (!this.isOpen) this.$emit('close')
    }
  }
}
</script>

<style lang="scss">

</style>

