<template>
  <transition name="fadeInLeft">
    <div class="columns" v-if="getNotification">
      <div class="notification is-primary is-light">
        <button class="delete"></button>
        <p v-for="(text, index) in notification" :key="index">{{text}}</p>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: "notificationLoader",
  data() {
    return {
      notification: null
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
    },
  },
  components: {},
  computed: {}
};
</script>

<style lang="scss">

/* Table animation */
.fadeIn-enter-active{
animation: fadeInLeft .6s; 
}

.fadeIn-leave-active{
animation: fadeInLeft .4s reverse;
}


@keyframes fadeInLeft{
  0%{
    opacity: 0;
    margin-left: -100px;
  }
  100%{
    opacity: 1;
     margin-left: 0px;
  }
}


</style>