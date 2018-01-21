<template>
  <ul class="chat-messages">
    <li v-for="(msg, key) in messages" :key="key" class="chat-messages__message">
      <span v-html="msg"></span>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['messages']
}
</script>

<style lang="scss">
  @import 'colors';

  .chat-messages {
    &__message {
      padding: 10px 5px;
      & + &  {
        border-top: 1px $secondary-color solid;
      }
    }
  }
</style>
