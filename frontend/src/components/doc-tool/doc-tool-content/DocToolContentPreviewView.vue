<template>
  <vue-markdown class="doc-tool-content-preview" :source="markdownText" >
  </vue-markdown>
</template>

<script>
import VueMarkdown from 'vue-markdown'

export default {
  components: {
    VueMarkdown
  },
  props: ['markdownText']
}
</script>

<style>

</style>
