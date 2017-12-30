<template>
  <div class="doc-tool-content-editor">
    <textarea class="doc-tool-content-editor__textarea" ref="textarea" v-model="content"></textarea>
  </div>
</template>

<script>
export default {
  props: ['markdownText', 'focus'],
  created () {
  },
  watch: {
    focus: function () {
      if (this.focus === true && this.$refs.textarea) {
        this.$refs.textarea.focus()
      }
    }
  },
  computed: {
    content: {
      get: function () {
        return this.markdownText
      },
      set: function (newValue) {
        this.$emit('content-change', newValue)
      }
    }
  }
}
</script>

<style lang="scss">
  .doc-tool-content-editor {
    &__textarea {
      width: 100%;
      height: 100%;
      resize: none;
      &:focus, &:hover {
        outline: 0;
      }
    }
  }
</style>
