<template>
  <div id="app">
    <h1>{{title}}</h1>
    <p class="desc">{{description}}</p>
    <div class="message is-info">
      <div class="message-body">{{instruction}}</div>
    </div>
    <input-loader></input-loader>
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

  h1{
    font-size: 2em;
    margin-bottom: 20px;
  }

  p{
    margin-bottom: 10px;
    &.desc{
      margin-bottom: 50px;
    }
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