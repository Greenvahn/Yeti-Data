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
  max-width: 1000px;
  padding: 0 20px;
}

.wrap-text-launcher {
  padding: 0 20px;
}

// ***  MEDIA QUERIES *** //


/* ----------- iPhone 5, 5S, 5C and 5SE ----------- */

/* Portrait and Landscape */
@media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 568px)
  and (-webkit-min-device-pixel-ratio: 2) {
  .notification-holder {
    display: none;
  }

  .tablewrap table {
    zoom: 39%;
  }
  
  .is-one-fifths {
    margin: 0 auto;
  }

  .modal-content {
    width: 300px;
  }

  .wrap-instructions {
    flex-direction: column;
    .inst-txt{
      position: relative;
      left: 0;
      width: 100%;
    }
  }

  .control.columns { min-height: 290px }
  .bar {max-width: 275px !important }
  .footer p { padding: 0 10px;}
}
</style>