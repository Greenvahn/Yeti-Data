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
    const _dataTable = this.$store.getters.getTable;

       /* Empty arrays */
      let _arrLabels = [];
      let _arrValues = [];

      // _arrValues = _dataTable.filter()
      _dataTable.forEach(element => {
        typeof element != "number"
          ? _arrLabels.push(element)
          : _arrValues.push(element);
      });

    //Show chart
    this.show = !this.show
    this.$store.dispatch("addChartBar", this.show);

    }

  },
  computed: {
  }
};
</script>
<style>
</style>