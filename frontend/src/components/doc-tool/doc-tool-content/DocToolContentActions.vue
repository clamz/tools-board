<template>
  <div class="doc-tool-content-actions">
    <v-btn fab fixed bottom right class="doc-tool-content-actions__edit-btn" @click="toggleEdit">
      <v-icon>{{ isEdit ? 'check' : 'edit' }}</v-icon>
    </v-btn>
    <v-btn fab fixed bottom right class="doc-tool-content-actions__fullscreen-btn" v-if="isEdit" @click="toggleFullscreen">
      <v-icon>{{ isFullscreen ? 'fullscreen_exit' : 'fullscreen' }}</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isEdit: false,
      isFullscreen: false
    }
  },
  methods: {
    toggleEdit: function () {
      this.isEdit = !this.isEdit
      this.$emit('toggle-edit', this.isEdit)
    },
    toggleFullscreen: function () {
      this.isFullscreen = !this.isFullscreen
      this.$emit('toggle-fullscreen', this.isFullscreen)
    }
  }
}
</script>

<style lang="scss">
  @import 'colors';
  .doc-tool-content-actions {
    &__edit-btn,  &__fullscreen-btn {
      background: $secondary-color !important;
      color: $text-secondary-color !important;
      z-index: 200 !important;
    }

    &__fullscreen-btn {
      right: 80px;
    }
  }
</style>

