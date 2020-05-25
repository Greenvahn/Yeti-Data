<template>
  <div class="control columns">
    <div class="column is-2">
      <div class="wrap-instructions">
        <button
          v-for="(button, index) in giveMeButtons"
          :key="index"
          @click="whatChart(button.text)"
          :class="[button.class, {visited: visited}]"
        >
          <span :class="'file-icon '+button.icon.size" v-if="button.icon">
            <font-awesome-icon :icon="button.icon.name" />
          </span>
        </button>
        <div class="inst-txt" v-if="showInstructions">
          <p>Here you can select the presets of the chart. You will be able to select a column for labels and other for values.</p>
          <p>
            <b>Start by pressing the chart button from this container.</b>
          </p>
        </div>
      </div>
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

    <div class="column">
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
    return {
      visited: false,
      disabled: false,
      showInstructions: true,
      clicked: []
    };
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
    whatChart(value, event) {
      // Add visited status and disable status
      this.visited = this.disabled = true;

      // Hide intructions
      this.showInstructions = false;

      // Activate the chart
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
    showLaunchMiniChart() {
      // Is mini chart launcher activated?
      let isMiniChartLauncher = this.$store.getters.getMiniChart.launcher;

      return isMiniChartLauncher;
    }
  }
};
</script>

<style lang="scss">
.wrap-instructions {
  display: flex !important;
  flex-direction: row;
  justify-content: left;
  max-height: 72px;
}

.inst-txt {
  padding: 8px 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  width: 80%;
  height: 75%;
  left: 20%;

  p{
  text-align: left;
  color: #3298dc;
  margin-bottom: 2px;
  }
}

.show-presets {
  width: 100%;
  height: 75px;
  opacity: 0.8;
  padding: 15px 35px;
  background: transparent;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid #3298dc;
  cursor: pointer;
  transition: all 0.1s ease-in;
  span {
    margin: 0px;
  }

  svg {
    color: #3298dc;
  }

  &:hover {
    opacity: 1;
    background-color: #3298dc;
    svg {
      color: #fff;
    }
  }

  &:focus {
    outline: none;
  }

  &.visited {
    opacity: 0.3;
    pointer-events: none;
  }
}

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


  .select {
    width: 100%;
    select { 
      width: 100%;
    } 
  }
}

.control {
  width: 100%;
  height: auto;
  padding: 20px;
  align-items: center;
  margin: 0 auto !important;
  background: white;
  border-radius: 5px;
  border: 0.5px solid rgba($color: #e2e2e2, $alpha: 0.6);
  -webkit-box-shadow: 0px 5px 2px -3px rgba(0, 0, 0, 0.06);
  -moz-box-shadow: 0px 5px 2px -3px rgba(0, 0, 0, 0.06);
  box-shadow: 0px 5px 2px -3px rgba(0, 0, 0, 0.06);
}

/* Options animation */
.fadeIn-enter-active {
  animation: fadeInLeft 0.6s;
}

.fadeIn-leave-active {
  animation: fadeInLeft 0.4s reverse;
}

@keyframes fadeInLeft {
  0% {
    opacity: 0;
    margin-left: -10px;
  }
  100% {
    opacity: 1;
    margin-left: 0px;
  }
}


@media only screen and (max-width: 720px) { 
  .wrap-instructions {
    flex-direction: column;
    .inst-txt{
      position: relative;
      left: 0;
      width: 100%;
    }
  }

}
</style>