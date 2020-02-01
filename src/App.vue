<template>
  <div id="app">
    <p>Load your file here</p>
    <input-component></input-component>
  </div>
</template>

<script>
import inputComponent from './components/input-component.vue'

export default {
  name: 'app',
  components: {
    inputComponent
  },
  data(){
      return{

      }
    },
  computed: {

  }
}
</script>


<style lang="scss">
   @import 'bulma';
   html, body{
     height: 100%;
   }

    body{
     display: flex;
     flex-direction: column;
     justify-content: center;
   }

   #app{
     width: 100%;
     max-width: 600px;
     max-height: 300px;
     height: 100%;
     margin: 0 auto;
   }
</style>