<template>
  <button @click="loadPresets">Button chart</button>
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

    // const _dataTable = this.$store.getters.getTable;

    //    /* Empty arrays */
    //   let _arrLabels = [];
    //   let _arrValues = [];

    //   // _arrValues = _dataTable.filter()
    //   _dataTable.forEach(element => {
    //       //console.log(typeof parseInt(element), "----")
    //       console.log(element[2])
    //   });


    //Show chart
    this.show = !this.show
    this.$store.dispatch("addChartBar", this.show);

    }

  },
  computed: {
    //   showButton(){
    //     return this.$store.getters.getChartBar;
    //   }
  }
};
</script>
<style>
</style>