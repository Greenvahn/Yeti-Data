<template>
  <div id="app">
  <div class="main">
    <h1>{{title}}</h1>
    <p class="desc">{{description}}</p>
    <div class="message is-info">
      <div class="message-body">{{instruction}}</div>
    </div>
    <input-loader></input-loader>
  </div>
    <table-render></table-render>
    <modal-message></modal-message>
  </div>
</template>

<script>
import inputLoader from './components/input-loader.vue'
import tableRender from './components/table-render.vue'
import modalMessage from './components/modal-msg.vue'

export default {
  name: 'app',
  components: {
    inputLoader,
    tableRender,
    modalMessage
  },
    methods:{
    },
  computed: {
    instruction(){ // get instructions from the store.js
      return this.$store.state.instructions.main
    },
    title(){ // get title from the store.js
      return this.$store.state.title
    },
    description(){ // get description from the store.js
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
     background: #f7fafc;
   }

   #app{
     width: 100%;
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
    &.desc{margin-bottom: 50px;}
  }
</style>