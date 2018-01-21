<template>
  <div class="chat-footer">
    <textarea class="chat-footer__input" type="text" ref="textarea" @keydown.enter.exact.prevent.stop @keyup.enter.exact.prevent.stop="addMessage" @keyup.shift.enter.exact="growTextarea" v-model="message" rows="1"></textarea>
    <button class="chat-footer__button" @click="addMessage"><v-icon dark>add</v-icon></button>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        message: ''
      }
    },
    methods: {
      addMessage: function () {
        console.log(this.message)
        if (this.message.trim() !== '') {
          this.$emit('addMessage', this.message.split('\n').join('<br />'))
          this.message = ''
          this.$refs.textarea.rows = 1
        }
      },
      growTextarea: function () {
        this.$refs.textarea.rows = this.$refs.textarea.rows + 1
      }
    }
  }
</script>

<style lang="scss">
  @import 'colors';
  .chat-footer {
    width: 100%;
    display: flex;
    &__input {
      width: 100%;
      border: 2px solid $secondary-color;
      padding: 5px;
      resize: none;
    }
    &__button {
      background: $secondary-color;
      color: $text-primary-color;
      padding: 5px;
    }
  }
</style>
