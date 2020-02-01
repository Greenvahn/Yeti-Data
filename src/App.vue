<template>
  <div id="app">
  <div class="main">
    <h1>{{title}}</h1>
    <p class="desc">{{description}}<a href="./sample/sample.csv" target="_blank">Here</a></p>
    <div class="message is-info">
      <div class="message-body">{{instruction}}</div>
    </div>
    <input-loader></input-loader>
  </div>
    <table-render></table-render>
  </div>
</template>

<script>
import inputLoader from './components/input-loader.vue'
import tableRender from './components/table-render.vue'
import * as d3 from "d3"

export default {
  name: 'app',
  components: {
    inputLoader,
    tableRender
  },
  data(){
      return{
        loadData: {}
      }
    },
    methods:{
    },
  computed: {
    instruction(){
      return this.$store.state.instructions.main
    },
    title(){
      return this.$store.state.title
    },
    description(){
      return this.$store.state.description
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
    //  max-height: 300px;
     height: 100%;
     margin: 0 auto;

        .main{
             margin: 0 auto;
            width: 100%;
            height: 100%;
            max-width: 900px;
            max-height: 300px;
          .message{max-width: 845px;}
        }

   }


  h1{
    font-size: 2.5em;
    margin-bottom: 20px;
  }

  p{
    margin-bottom: 10px;
    &.desc{
      margin-bottom: 50px;
    }
  }

</style>