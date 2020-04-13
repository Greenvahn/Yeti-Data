<template>
  <div class="control columns">
    <div class="column is-2 type-chart">
      <button
        v-for="(button, index) in giveMeButtons"
        :key="index"
        @click="whatChart(button.text)"
      >{{button.text}}</button>
    </div>

    <div class="column" v-for="(dropdown,index) in giveMeDropdowns" :key="index">
      <transition name="fadeInLeft">
        <div class="chart-options" v-if="showDropdowns">
          <label>
            <span :class="dropdown.id"></span>
            {{dropdown.id}}
          </label>
          <div
            v-on:change="commitValue(dropdown)"
            :key="index"
            :class="dropdown.class"
            v-bind:id="dropdown.id"
          >
            <select>
              <option>{{dropdown.text}}</option>
              <option v-for="(option, index) in dropdown.options" :key="index">Column {{option}}</option>
            </select>
          </div>
        </div>
      </transition>
    </div>

    <div class="column is-2">
      <transition name="fadeInLeft">
      <buttonChart v-if="showLaunchMiniChart"></buttonChart>
      </transition>
    </div>
  </div>
</template>
<script>
import buttonChart from "./button-chart.vue";

export default {
  name: "chart-presets",
  components: {
    buttonChart
  },
  data() {
    return {};
  },
  methods: {
    commitValue(dropdown) {
      // Object base to dispatch to the store
      let _tempObj = {
        name: dropdown.id, // Parse the dropdown id to identify later --> NAME
        value: Number(event.target.value.split("").pop()) // Parse the selected column NUMBER -> parse value as a number
      };

      // Calls the createOptions from the store and dispatch the temporal object
      this.$store.dispatch("createOptions", _tempObj);
    },
    whatChart(value) {
      // Selects the type of chart to launch
      this.$store.dispatch("addTypeChart", value);
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
          element.options.push(index);
        });
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
        return isNaN(item);
      });

      let _filteredValues = _dataTable[0].filter((item, index) => {
        return !isNaN(item);
      });

      /* Create a global array to generate the options
       * Push filtered arrays into the options
       */
      let _dropdownOptions = [];
      _dropdownOptions.push(_filteredLabels, _filteredValues);

      return _dropdownOptions;
    },
    showDropdowns() {
      // Check if type of chart has been selected -  bars or pie
      let isChartTypeSelected = this.$store.getters.getMiniChart.graphic.active;

      return isChartTypeSelected;
    },
    showLaunchMiniChart(){
      // Is mini chart launcher activated?
      let isMiniChartLauncher = this.$store.getters.getMiniChart.launcher

      return isMiniChartLauncher
    }
  }
};
</script>

<style lang="scss">
.chart-options {
  label {
    display: flex;
    width: 100%;
    text-transform: capitalize;
  }
  span {
    width: 10px;
    height: 25px;
    margin-right: 10px;
    margin-bottom: 10px;
    &.values {
      background: #fdcf38;
    }
    &.labels {
      background: #75c1f3;
    }
  }
}

.control{
  width: 100%;
  margin: 0 auto !important;
  background: rgba(lightblue, 0.2);
}

/* Options animation */
.fadeIn-enter-active{
animation: fadeInLeft .6s; 
}

.fadeIn-leave-active{
animation: fadeInLeft .4s reverse;
}


@keyframes fadeInLeft{
  0%{
    opacity: 0;
    margin-left: -10px;
  }
  100%{
    opacity: 1;
     margin-left: 0px;
  }
}
</style>