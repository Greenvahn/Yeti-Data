<template>
  <footer class="footer">
    <div class="content has-text-centered">
      <p>
        <strong>Yeti Data</strong> by
        <a href="https://saulverde.com">Saul Verde</a>. The source code is licensed
        <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
        is licensed
        <a
          href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
        >CC BY NC SA 4.0</a>.
      </p>
      <p>Boosted  by <a href="https://vuejs.org">Vuejs</a> and <a href="https://bulma.io">Bulma</a>.</p>
    </div>
  </footer>
</template>
<script>
export default {
  name: "footer-page",
  components: {},
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss">
@import "bulma";
.footer {
  background-color: #eef2f5 !important;
  position: relative;
  bottom: 0px;
  width: 100%;
  padding: 1.5em 0em !important;
  margin-top: 100px;
}
</style>