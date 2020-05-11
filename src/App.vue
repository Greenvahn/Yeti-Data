<template>
  <div id="app">
  <div class="main">
    <headerPage></headerPage>
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
import headerPage from './components/header-page.vue'

export default {
  name: 'app',
  components: {
    inputLoader,
    tableRender,
    modalMessage,
    headerPage
  },
    methods:{
    },
  computed: {
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
</style>