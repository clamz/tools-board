<template>
  <div class="doc-tool-content-editor">
    <textarea class="doc-tool-content-editor__textarea" ref="textarea" v-model="markdownText"></textarea>
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
