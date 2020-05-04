<template>
  <div class="container chart-area">
    <div class="chart-wrap" v-if="showChart">
      <div v-for="(obj) in getChartData" class="wrap-figure" v-bind:key="obj.labels">
        <div class="wrap-data-txt">
          <span class="label-txt">{{obj.labels}}</span>
          <span class="value-txt">{{obj.values}}</span>
        </div>
        <div class="wrap-bar-value">
          <div class="bar" v-bind:style="{width: [(obj.values/100)*100] +'px'}">
            <span>{{Math.round((obj.values/1000)*100)}}%</span>
          </div>
        </div>
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
.chart-wrap {
  display: flex;
  flex-direction: column;
  align-self: center;
  padding: 20px 0px;
  margin-top: 20px;
  width: 100%;
  .wrap-figure {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 5px;
    background: white;
    border: 0.5px solid #e2e2e2;
    border-radius: 4px;
    margin: 5px 0px;
    -webkit-box-shadow: 0px 5px 2px -3px rgba(0, 0, 0, 0.06);
    -moz-box-shadow: 0px 5px 2px -3px rgba(0, 0, 0, 0.06);
    box-shadow: 0px 5px 2px -3px rgba(0, 0, 0, 0.06);

    .wrap-data-txt {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      .label-txt {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        margin: 0px 20px;
        padding: 5px 10px 10px 0px;
        font-size: 16px;
        font-weight: bold;
        color: #3f58b3;
        // background: #edf8ff;
        border-radius: 4px;
      }

      .value-txt {
        font-size: 1.8em;
        font-weight: bold;
        font-style: italic;
        color: #da9c10;
        opacity: 0.3;
        padding-right: 20px;
      }
    }

    .wrap-bar-value {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      margin: 0px 20px;
      padding-bottom: 5px;

      .bar {
        background-color: #75c1f3;
        width: 0%;
        min-width: 2%;
        max-width: 98%;
        width: 10px;
        height: 20px;
        border-radius: 3px;
        transition: all 0.8s ease-in;

        span {
          display: flex;
          flex-direction: row;
          justify-content: flex-end;
          margin-right: -40px;
        }
      }
    }
  }
}
</style>