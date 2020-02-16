<template>
  <div class="columns options-wrap">
    <div class="column is-four-fifths has-margin-10">
      <div class="columns">
        <div class="column is-2">
          <b>{{loadingOptions}}</b>
        </div>
        <div class="column is-10">
          <div class="columns">
            <div v-for="(item, index) in renderOptions" v-bind:key="index" class="column is-3">
              <label class="checkbox">
                <input type="checkbox" v-model="item.toggle"/>
                {{item.text}}
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "optionsLoader",
  data() {
    return {
      loadingOptions: "Options: ",
    };
  },
  methods:{

  },
  computed: {
    renderOptions() {
      return this.$store.getters.getInputOptions;
    }
  }
};
</script>

<style lang="scss">
.options-wrap {
  margin-bottom: 10px;
  .is-grey {
    background-color: #f7f7f7;
  }
  .has-margin-10 {
    margin: 0 10px;
  }
}
</style>