<template>
  <section class="hero is-primary is-bold">
    <div class="hero-head">
      <nav class="navbar">
        <div class="container">
          <div class="navbar-brand">
            <a class="navbar-item">
              <img src="../images/yeti-logo.png" alt="Logo" />
            </a>
          </div>
        </div>
      </nav>
    </div>

    <div class="container">
      <h2 class="subtitle">{{description}}</h2>
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

h2.subtitle{
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
    img {
      width: 100%;
      height: 100%;
      max-height: 100%;
    }
  }
}
</style>