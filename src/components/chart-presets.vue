<template>
  <div class="control">
    <div class="type-chart">
      <button v-for="(button, index) in giveMeButtons" :key="index">{{button.text}}</button>
    </div>
    <div class="chart-options">
      <div v-for="(dropdown,index) in giveMeDropdowns" v-on:change="commitValue()" :key="index" :class="dropdown.class" v-bind:id="dropdown.id">
        <select>
          <option>{{dropdown.text}}</option>
          <option v-for="(option, index) in dropdown.options" :key="index">Column {{option}}</option>
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
    giveMeDropdowns() {
      // Generate the dropdowns based of the number of the columns from the table

      // Get the dropdown default data
      let _dropdownOptions = this.$store.getters.getButtonLib.columnSelector;

      // Retrieve table values
      const _dataTable = this.$store.getters.getTable;
      
      /* Populate the dropdown options 
      * Iterate through first table row
      * * Get the index of each item from the first table row and push it into the dropdown options
      */
      _dataTable[0].forEach((element, index) => {
        _dropdownOptions.forEach(element => {
          element.options.push(index)
        })
      });

      return _dropdownOptions;
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