<template>
    <div class="wrap-buttons">
        <button v-for="(button, index) in giveMeButtons" @click="loadPresets" :key="index">{{button.text}}</button>
    </div> 
</template>
<script>
export default {
  name: "button-chart",
  data() {
    return {
      show: false
    };
  },
  methods: {
    
    loadPresets() {
    //Show chart
    this.show = !this.show
    this.$store.dispatch("addChartBar", this.show);

    }

  },
  computed: {
      giveMeButtons(){
       
       // Retrieves button data object from store.js
       let _computedButtonLib = this.$store.getters.getButtonLib;

       // Access to the CHART buttons array from the store.js
       _computedButtonLib = _computedButtonLib.loadChart;

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
<style>
</style>