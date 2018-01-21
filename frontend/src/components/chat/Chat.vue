<template>
  <div class="chat">
    <div class="chat__messages">
      <chat-messages :messages="messages"></chat-messages>
    </div>
    <div class="chat__footer">
      <chat-footer @addMessage="add"></chat-footer>
    </div>
  </div>
</template>

<script>
import chatFooter from './ChatFooter.vue'
import chatMessages from './ChatMessages.vue'
export default {
  components: {
    chatFooter,
    chatMessages
  },
  data () {
    return {
      messages: []
    }
  },
  created () {
    this.$socket.on('add message', (response) => {
      this.messages.push(response.message)
    })
  },
  methods: {
    add: function (message) {
      this.$socket.emit('add', { message })
    }
  },
  socket: {
  }
}
</script>

<style lang="scss">
  .chat {
    height: 100vh;
    flex-direction: column;
    justify-content: flex-end;
    display: flex;
    flex-direction: column;
    &__messages {
      padding: 5px 10px;
    }
    &__footer {
      padding: 5px 10px;
    }
  }
</style>

