<template>
  <div id="app">
    <p>Load your file here</p>
    <input-loader></input-loader>
  </div>
</template>

<script>
import inputLoader from './components/input-loader.vue'

export default {
  name: 'app',
  components: {
    inputLoader
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