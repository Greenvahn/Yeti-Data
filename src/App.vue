<template>
  <div id="app">
    <p>Load your file here</p>
    <input-loader @loadData="updateData"></input-loader>
    <!-- <button-launcher v-bind:dataFileName="fileName"@loadData="updateData"></button-launcher> -->
    <table-render v-bind:dataTable="csvJSON"></table-render>
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
      csvJSON () {
          let csv = this.dataText.toString();
          
          var lines=csv.split("\n");

          var result = [];

          var headers=lines[0].split(",");

          for(var i=1;i<lines.length;i++){

            var obj = {};
            var currentline=lines[i].split(",");

            for(var j=0;j<headers.length;j++){
              obj[headers[j]] = currentline[j];
            }

            result.push(obj);

          }
          
          //return result; //JavaScript object
          return csv;
          //return JSON.stringify(result); //JSON
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