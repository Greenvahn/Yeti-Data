<template>
  <div id="app">
    <div class="main">
      <topPage></topPage>
      <input-loader></input-loader>
      <table-render></table-render>
      <footer-page></footer-page>
    </div>
    <modal-message></modal-message>
  </div>
</template>

<script>
import inputLoader from "./components/input-loader.vue";
import tableRender from "./components/table-render.vue";
import modalMessage from "./components/modal-msg.vue";
import topPage from "./components/top-page.vue";
import footerPage from "./components/footer-page.vue";

export default {
  name: "app",
  components: {
    inputLoader,
    tableRender,
    modalMessage,
    topPage,
    footerPage
  },
  methods: {},
  computed: {
    title() {
      // get title from the store.js
      return this.$store.state.title;
    },
    description() {
      // get description from the store.js
      return this.$store.state.description;
    }
  }
};
</script>


<style lang="scss">
@import "bulma";

html,
body {
  height: 100%;
}

body {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

#app {
  width: 100%;
  height: 100%;
  margin: 0 auto;

  .main {
    margin: 0 auto;
    width: 100%;
    height: auto;
    background: #f7fafc;
    // max-width: 900px;
    // max-height: 300px;
    .message {
      max-width: 845px;
    }
  }
}

.launcher,
.main-text {
  width: 100%;
  height: auto;
  margin: 0 auto;
  max-width: 990px;
}

.tablewrap {
  width: 100%;
  max-width: 1200px;
}

.wrap-text-launcher{
  padding: 0 20px;
}
</style>