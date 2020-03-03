<template>
  <div class="modal" :class="{isActive:getModal()}">
    <div class="modal-background"></div>
    <div class="modal-content">
      <!-- Any other Bulma elements you want -->
      <article :class="message.type">
        <div class="message-header">
          <span :class="'file-icon '+message.icon.size" v-if="message.icon">
            <font-awesome-icon :icon="message.icon.name" />
          </span>
          <p class="p-title">{{message.title}}</p>
        </div>
        <div class="message-body">
          <p v-for="(text,index) in message.msg" v-bind:key="index" :class="text.class">{{text.p}}</p>
          <div class="btn-wrap">
            <button
              v-for="(button,index) in message.buttons"
              v-bind:key="index"
              class="button is-normal modal-btn"
              v-on:click="closeMsg()"
            >{{button.txt}}</button>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>
<script>
export default {
  name: "modal",
  data() {
    return {
      message: {}
    };
  },
  methods: {
    getModal() {
      // Get libray messages from the store
      const letMessages = this.$store.getters.getMessages;

      // Get current modal status
      let _currentStatus = this.$store.getters.getModalStatus;

      // Iterates throught store messages object and assign one message to the current data message [this.message]
      letMessages.forEach(msg => {
        msg.id === _currentStatus.id ? (this.message = msg) : msg;
      });

      // Return the current value of the modal status --> modal.value = true ? show modal : hide modal
      // * This value is mutated from the store
      return _currentStatus.value;
    },
    closeMsg() {
      this.$store.dispatch("closeModal", false);
    }
  },
  computed: {}
};
</script>

<style lang="scss">
.modal.isActive {
  display: flex;
  animation: scaleIn 0.3s ease-in-out;

  .modal-background {
    background-color: rgba(10, 10, 10, 0.4);
  }

  .p-title {
    font-size: 1.4em;
    margin: 0px;
    padding: 5px;
  }
  .p-subtitle {
    font-size: 1em;
    font-weight: bold;
    margin: 25px 0px 10px 0px;
  }

  .btn-wrap {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    width: 100%;
    .modal-btn {
      min-width: 60px;
      margin: 10 50%;
    }
  }

  .message-header{
    justify-content: flex-start;

    .file-icon{
      margin-right: 10px;
    }

  }

}

@keyframes scaleIn {
  0% {
    opacity: 0;
    transform: scale(1);
  }
  66% {
    opacity: 0.6;
    transform: scale(1.2);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
</style>