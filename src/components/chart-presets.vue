<template>
  <div class="control columns">
    <div class="column is-2 type-chart">
      <button v-for="(button, index) in giveMeButtons" :key="index">{{button.text}}</button>
    </div>
    <div class="column" v-for="(dropdown,index) in giveMeDropdowns" :key="index">
      <div class="chart-options">
      <label>{{dropdown.id}}</label>
      <div v-on:change="commitValue(dropdown)" :key="index" :class="dropdown.class" v-bind:id="dropdown.id">
        <select>
          <option>{{dropdown.text}}</option>
          <option v-for="(option, index) in dropdown.options" :key="index">Column {{option}}</option>
        </select>
      </div>
      </div>
    </div>
    <div class="column is-2">
      <buttonChart></buttonChart>
    </div>
  </div>
</template>
<script>
import buttonChart from './button-chart.vue'

export default {
  name: "chart-presets",
  components: {
    buttonChart
  },
  data() {
    return {

    };
  },
  methods: {
    commitValue(dropdown) {

      // Object base to dispatch to the store
      let _tempObj = {
        name: dropdown.id, // Parse the dropdown id to identify later --> NAME
        value: Number(event.target.value.split('').pop()) // Parse the selected column NUMBER -> parse value as a number
      }

      // Calls the createOptions from the store and dispatch the temporal object
      this.$store.dispatch('createOptions', _tempObj);
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

<style lang="scss">

  .chart-options{
    label{
      display: block;
      width: 100%;
      text-transform: capitalize;
    }
  }


</style>