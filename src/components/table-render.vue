<template>
  <transition name="fadeIn">
    <div v-if="dataTable" class="container tablewrap">
      <table>
        <tr
          v-for="(item, index) in dataTable"
          v-bind:key="index"
          v-bind:class="{headerRow : checkHeaderRow('has header', index)}"
        >
          <td
            v-for="(element, index) in item"
            v-bind:key="index"
            v-bind:class="addClass(index, dataInputs)"
          >{{element}}</td>
        </tr>
      </table>
      <chartBoxBar></chartBoxBar>
    </div>
  </transition>
</template>

<script>
import chartBoxBar from "./chart-box--bar.vue";

export default {
  name: "table-render",
  components: {
    chartBoxBar
  },
  data() {
    return {
      show: false,
      label: false,
      minichart: {
        labels: []
      }
    };
  },
  methods: {
    checkHeaderRow(nameOption, index) {
      // nameOtion --> parse the input option name from the store

      // Get options array from the store
      const options = this.$store.getters.getInputOptions;

      // Define input attribute check false by default
      let isCheck = false;

      // Loop through all the inputOtpions from the store get the attribute check from the option parsed
      options.forEach(option => {
        option.name == nameOption ? (isCheck = option.isCheck) : isCheck;
      });

      // Check if is the first line of the table and the option has been checked.
      return index === 0 ? isCheck : false;
    },
    addClass(index, computedData) {
      // Define initial variables
      let _labels = computedData.labels, // this.$store.minchartOptions.inputs.labels
        _values = computedData.values, // this.$store.minchartOptions.inputs.values
        _returnClass = "";

      index === _labels
        ? _returnClass = "isLabel" // return class 'isLabel'
          : index === _values
          ? _returnClass = "isValue" // return class 'isValue'
        : false;

      return _returnClass;
    }
  },
  computed: {
    dataTable() {
      //get data table
      return this.$store.getters.getTable;
    },
    dataInputs() {
      return this.$store.getters.getMiniChart.inputs;
    }
  }
};
</script>

<style lang="scss">
.container.tablewrap{
  margin-top: 40px;
}

table {
  //border: 1px solid #cecece;
  // background: white;
  width: 100%;
  margin-bottom: 50px;
  tr {
    // border-bottom: 1px solid #cecece;
    // &:nth-child(odd) {
    //   background-color: #f5f5f5b5;
    // }

    border-bottom: 1px solid rgba($color: #2d85c0, $alpha: 0.1);
    padding-bottom: 20px;

    &:last-of-type{
      border: none;
    }

    td {
      font-size: 12px;
      //border-right: 0.5px solid #cecece;
      padding: 10px 10px 15px 10px;
      cursor: pointer;
      &:first-child {
        border-left: none;
       // border-right: 0.5px solid #cecece;
      }
      // &:last-child {border-left: none; border-right: none;}
      &:hover {
        background-color: #e3f4ff;
      }

      &.isLabel {
        background-color: #c5e8ff;
        &:hover {
          background-color: #75c1f3;
          color: white;
        }
      }
      &.isValue {
        background-color: rgba($color: #fdcf38, $alpha: 0.3);
        &:hover {
          background-color: #fdcf38;
          color: white
        }
      }
    }

    &.headerRow {
      background-color: #8effcc;
      columns: #000;
      border-bottom: 5px solid #000;
      font-weight: bold;
    }
  }
}

/* Table animation */
.fadeIn-enter-active {
  animation: fadeIn 0.6s;
}

.fadeIn-leave-active {
  animation: fadeIn 0.4s reverse;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    margin-top: -10px;
  }
  100% {
    opacity: 1;
    margin-top: 40px;
  }
}


/* Media queries */
@media only screen and (max-width: 720px) {
  .tablewrap table { zoom: 50%;}
}
</style>