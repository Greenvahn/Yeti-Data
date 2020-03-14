<template>
  <div class="control">
    <div class="type-chart">
        <button v-for="(button, index) in giveMeButtons" :key="index">{{button.text}}</button>
    </div>
    <div class="chart-options">
      <div v-on:change="commitValue()" class="select" id="opt1">
        <select>
          <option>Select dropdown 1</option>
          <option>With options 1</option>
        </select>
      </div>
      <div v-on:change="commitValue()" class="select" id="opt2">
        <select>
          <option>Select dropdown 2</option>
          <option>With options 2</option>
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
      giveMeButtons(){
       
       // // Retrieves button data object from store.js
       let _computedButtonLib = this.$store.getters.getButtonLib;

       // Access to the TYPE OF CHART buttons array from the store.js
       _computedButtonLib = _computedButtonLib.typeOfChart;

       // Filter the buttons to show only those with state true
            let _filteredButtons = _computedButtonLib.filter(item => {
                return (item.state)
            })
            
        // Returns array of filterd buttons
        return _filteredButtons
      }
  }
};
</script>