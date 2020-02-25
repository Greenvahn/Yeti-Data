<template>
  <div class="modal" :class="{isActive:getModal()}">
    <div class="modal-background"></div>
    <div class="modal-content">
      <!-- Any other Bulma elements you want -->
      <p v-for="(text,index) in message.msg" v-bind:key="index">{{text}}</p>
    </div>
    <button class="modal-close is-large" aria-label="close"></button>
  </div>
</template>
<script>
export default {
  name: "modal",
  data(){
    return{
      message:{}
    }
  },
  methods:{
      getModal(){

        // Get libray messages from the store
        const letMessages = this.$store.getters.getMessages;

        // Get current modal status
        let _currentStatus = this.$store.getters.getModalStatus;

        // Iterates throught store messages object and assign one message to the current data message [this.message]
        letMessages.forEach(msg => {
          msg.id === _currentStatus.id ? 
          this.message = msg : msg;
        });

        // Return the current value of the modal status --> modal.value = true ? show modal : hide modal
        // * This value is mutated from the store
        return _currentStatus.value;

      },
  },
  computed:{
  }
};
</script>
<style>
</style>