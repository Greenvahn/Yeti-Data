<template>
  <div id="app">
    <p>Load your file here</p>
    <input-loader @loadData="updateData"></input-loader>
    <!-- <button-launcher v-bind:dataFileName="fileName"@loadData="updateData"></button-launcher> -->
    <table-render></table-render>
  </div>
</template>

<script>
import inputLoader from './components/input-loader.vue'
import tableRender from './components/table-render.vue'

export default {
  name: 'app',
  components: {
    inputLoader,
    tableRender
  },
  data(){
      return{
        dataText: ""
      }
    },
    methods:{
      updateData(value){
        this.dataText = value;
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