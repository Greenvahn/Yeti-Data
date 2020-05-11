<template>
  <section class="hero">
    <div class="hero-body">

      <div class="hero-head">
        <nav class="navbar">
          <div class="container">
            <div class="navbar-brand">
              <a class="navbar-item">
                <img src="images/yeti-logo.svg" alt="Logo" />
              </a>
              <span class="navbar-burger burger" data-target="navbarMenuHeroA">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
            <div id="navbarMenuHeroA" class="navbar-menu">
              <div class="navbar-end">
                <span class="navbar-item">
                  <a class="button is-primary is-inverted">
                    <span class="icon">
                      <i class="fab fa-github"></i>
                    </span>
                    <span>Download</span>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div class="container">
        <h1 class="title">{{title}}</h1>
        <h2 class="subtitle">{{description}}</h2>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "header",
  components: {},
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
h1 {
  font-size: 2.5em;
  margin-bottom: 20px;
}

p {
  margin-bottom: 10px;
  &.desc {
    margin-bottom: 50px;
  }
}
</style>