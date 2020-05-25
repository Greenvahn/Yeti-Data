<template>
<div class="notification-holder">
  <transition name="fadeInLeft">
    <div
      v-if="notificationStatus"
      class="container note-wrap"
      :class="{isActive: getNotification()}"
    >
      <div class="columns">
        <div :class="notification.type">
          <button class="delete"></button>
          <p v-for="(text, index) in notification.msg" :key="index">{{text.p}}</p>
        </div>
      </div>
    </div>
  </transition>
  </div>
</template>
<script>
export default {
  name: "notificationLoader",
  data() {
    return {
      notification: {}
    };
  },
  methods: {
    getNotification() {
      // Get libray messages from the store
      const letMessages = this.$store.getters.getMessages;

      // Get current modal status
      let _currentStatus = this.$store.getters.getNotificationStatus;

      // Iterates throught store messages object and assign one message to the current data message [this.message]
      letMessages.forEach(msg => {
        msg.id === _currentStatus.id ? (this.notification = msg) : msg;
      });

      // Return the current value of the modal status --> modal.value = true ? show modal : hide modal
      // * This value is mutated from the store
      return _currentStatus.value;
    }
  },
  components: {},
  computed: {
    notificationStatus() {
      return this.$store.getters.getNotificationStatus.value;
    }
  }
};
</script>

<style lang="scss">
.notification-holder{
  margin-top: 20px;
  padding: 20px 0px;
  display: block;
  height: 80px;
  background: transparent
}

.container {
  &.note-wrap {
    p {
      margin-bottom: 0px;
    }
  }

  .notification {
    &.is-light {
      background-color: #ebfffc;
      color: #00947e;
    }
    &.is-promise{
      width: 90%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      margin: 0 auto;
      .delete{
        display: none;
      }
    }
  }
}

/* Table animation */
.fadeInLeft-enter-active {
  animation: fadeInLeft 0.6s;
}

.fadeInLeft-leave-active {
  animation: fadeInLeft 0.8s reverse;
}

@keyframes fadeInLeft {
  0% {
    opacity: 0;
    margin-left: -100px;
  }
  100% {
    opacity: 1;
    margin-left: 0px;
  }
}


@media only screen and (max-width: 600px) {
  .notification-holder { display: none;}
}
</style>