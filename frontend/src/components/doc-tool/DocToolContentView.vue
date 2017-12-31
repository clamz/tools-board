<template>
  <div class="doc-tool-content">
    <content-preview
      :markdown-text="item.content"
      class="doc-tool-content__preview"
      :class="{ 'doc-tool-content__preview--hide': isEdit }">
    </content-preview>
    <content-editor
      class="doc-tool-content__edit-area"
      :class="{ 'doc-tool-content__edit-area--show': isEdit, 'doc-tool-content__edit-area--fullscreen': isFullscreen }"
      :markdown-text="item.content"
      :focus="isEdit"
      @content-change="onContentChange">
    </content-editor>
    <content-actions
      @toggle-edit="toggleEdit"
      @toggle-fullscreen="toggleFullscreen"
    ></content-actions>
  </div>
</template>

<script>
import ContentPreview from './doc-tool-content/DocToolContentPreviewView.vue'
import ContentEditor from './doc-tool-content/DocToolContentEditor.vue'
import ContentActions from './doc-tool-content/DocToolContentActions.vue'

export default {
  components: {
    ContentPreview,
    ContentEditor,
    ContentActions
  },
  props: ['item'],
  data () {
    return {
      isEdit: false,
      isFullscreen: false
    }
  },
  methods: {
    toggleEdit: function (isEdit) {
      this.isEdit = isEdit
    },
    toggleFullscreen: function (isFullscreen) {
      this.isFullscreen = isFullscreen
    },
    onContentChange: function (content) {
      this.item.content = content
    }
  }
}
</script>

<style lang="scss">
  @import 'colors';

  .doc-tool-content {
    padding: 10px;
    &__preview {
      transition: all 0.2s;
      &--hide {
        opacity: 0;
        height: 0;
        padding: 0;
        overflow: hidden;
      }
    }
    &__edit-area {
      transition: all 0.2s;
      display: none;
      height: 0;
      background: white;
      &--show {
        display: block;
        height: 90vh;
      }

      &--fullscreen {
        position: fixed;
        left: 0;
        top: 0;
        z-index: 150;
        width: 100%;
        height: 100%;
        padding: 10px;

      }
    }
  }
</style>
