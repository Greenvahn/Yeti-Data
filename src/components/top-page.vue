<template>
  <section class="hero is-link is-bold">
    <div class="hero-head">
      <nav class="navbar">
        <div class="container">
          <div class="navbar-brand">
            <a class="navbar-item">
              <img src="../assets/images/yeti-logo_white.png" alt="Logo" />
            </a>
          </div>
        </div>
        <div class="header-deco"></div>
      </nav>
    </div>

    <div class="container">
      <h2 class="subtitle">{{descriptionHero}}</h2>
    </div>
  </section>
</template>

<script>
export default {
  name: "topPage",
  components: {},
  methods: {},
  computed: {
    title() {
      // get title from the store.js
      return this.$store.state.title;
    },
    descriptionHero() {
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

h2.subtitle {
  font-weight: bold;
}

p {
  margin-bottom: 10px;
  &.desc {
    margin-bottom: 50px;
  }
}

.navbar-brand {
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: center;

  .navbar-item {
    pointer-events: none;
    img {
      width: 100%;
      height: 100%;
      max-height: 100%;
    }
  }
}

.header-deco {
  position: absolute;
  bottom: 0px;
  background: url("../assets/images/pattern.png") 0px 0px repeat;
  width: 100%;
  height: 45px;
}
</style>