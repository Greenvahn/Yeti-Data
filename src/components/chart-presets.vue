<template>
  <div class="control">
    <div class="type-chart">
      <button v-for="(button, index) in giveMeButtons" :key="index">{{button.text}}</button>
    </div>
    <div class="chart-options">
      <div v-for="(drop,index) in generatedOptions" v-on:change="commitValue()" :key="index" class="select" v-bind:id="'opt'+index">
        <select>
          <option>Label</option>
          <option v-for="(option, index) in drop" :key="index">{{option}}</option>
        </select>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "chart-presets",
  components: {},
  data() {
    return {};
  },
  methods: {
    commitValue() {
      console.log("change");
    }
  },
  computed: {
    giveMeButtons() {
      // // Retrieves button data object from store.js
      let _computedButtonLib = this.$store.getters.getButtonLib;

      // Access to the TYPE OF CHART buttons array from the store.js
      _computedButtonLib = _computedButtonLib.typeOfChart;

      // Filter the buttons to show only those with state true
      let _filteredButtons = _computedButtonLib.filter(item => {
        return item.state;
      });

      // Returns array of filterd buttons
      return _filteredButtons;
    },
    generatedOptions(type) {
      const _dataTable = this.$store.getters.getTable;

      // Get options array from the store
      const _dataOptions = this.$store.getters.getInputOptions;

      /* Filter arrays --> number no numbers 
      * Use isNaN() function to check if number or not
      */
     
      let _filteredLabels = _dataTable[0].filter((item, index) => {
            return (isNaN(item))
      });

      let _filteredValues = _dataTable[0].filter((item, index) => {
            return (!isNaN(item))
      });

    /* Create a global array to generate the options
    * Push filtered arrays into the options
    */
    let _dropdownOptions = [];
    _dropdownOptions.push(_filteredLabels, _filteredValues);

      return _dropdownOptions
    }
  }
};
</script>