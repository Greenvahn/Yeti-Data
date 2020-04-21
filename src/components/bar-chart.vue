<template>
  <div class="container chart-area">
      <div class="chart-wrap" v-if="showChart">
        <div v-for="(obj) in getChartData" class="wrap-figure" v-bind:key="obj.values">
          <div class="bar" v-bind:style="{width: [(obj.values/100)*100] +'px'}"></div>
          <span class="label">{{obj.values}} - {{obj.labels}}</span>
        </div>
      </div>
  </div>
</template>
<script>
export default {
  name: "bar-chart",
  components: {},
  data() {
    return {
      temp: false
    };
  },
  computed: {
    showChart() {
      return this.$store.getters.getChartBarState;
    },
    getChartData() {
      const _originalData = this.$store.getters.getDataChart;
      let _chartData = [];

      _originalData.labels.forEach((element, index) => {
        let _objToPush = {};
        _objToPush.labels = element;
        _objToPush.values = _originalData.values[index];

        _chartData.push(_objToPush);
      });

      return _chartData;
    }
  }
};
</script>
<style lang="scss" type="text/css">
.chart-area {
  background: rgba(173, 216, 230, 0.2);
}

.chart-wrap {
  display: flex;
  flex-direction: column;
  align-self: center;
  padding: 20px;
  background: rgba(173, 216, 230, 0.2);
  width: 100%;
  .wrap-figure {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin: 2px 0px 2px 10px;

    .bar {
      background-color: #75c1f3;
      min-width: 1%;
      width: 10px;
      height: 20px;
      transition: all 0.8s ease-in;
    }

    .label {
      font-size: 12px;
      padding-left: 20px;
      color: hsl(217, 71%, 53%);
    }
  }
}

</style>