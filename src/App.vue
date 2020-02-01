<template>
  <div id="app">
    <p>Load your file here</p>
    <input-loader @newFile="updateFileName"></input-loader>
    <button-launcher 
      v-bind:dataFileName="fileName"
      @loadData="updateData"
    ></button-launcher>
    <table-render></table-render>
  </div>
</template>

<script>
import inputLoader from './components/input-loader.vue'
import buttonLauncher from './components/button-launcher.vue'
import tableRender from './components/table-render.vue'

export default {
  name: 'app',
  components: {
    inputLoader,
    buttonLauncher,
    tableRender
  },
  data(){
      return{
        fileName: "",
        dataText: []
      }
    },
    methods:{
      updateFileName(value){
        this.fileName = value;
      },
      updateData(value){
        this.dataText.push(value);
      }
    },
  computed: {

      uniqueItemsList: function(){
        const types = [];
        this.mediaList.forEach((item)=>{
          if(!types.includes(item.type)){
            types.push(item.type);
          }
        });
        return types;
      }

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