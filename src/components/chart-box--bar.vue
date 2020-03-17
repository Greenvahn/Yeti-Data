<template>
  <div class="container">
    <presetsChart></presetsChart>
    <barChart></barChart>
  </div>
</template>
<script>
import barChart from "./bar-chart.vue";
import presetsChart from "./chart-presets.vue";

export default {
  name: "chart-bar--box",
  components: {
    barChart,
    presetsChart
  }
};
</script>