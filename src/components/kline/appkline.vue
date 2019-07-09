<template>
  <div class="main">
    <div
      class="kline"
      :id="digname"
      style="width:210px;height: 130px; position: absolute;left: 5px;top: 75px; margin:0 auto;"
      ref="kindex"
    ></div>
  </div>
</template>
  
<script>
import echarts from "echarts";
export default {
  name: "",
  data() {
    return {
      digname: "my" + this.new_Data(),
      charts: "",
      opinionData: ["3", "2", "4", "7", "9", "11"]
    };
  },
  methods: {
    new_Data() {
      const suiji = Math.round(Math.random() * 999);
      const myData = new Date();
      const i = myData.getTime();
      return i + suiji;
    },
    drawLine(id) {
      this.charts = echarts.init(document.getElementById(id));
      this.charts.setOption({
        // tooltip: { trigger: "axis" },
        // legend: { data: ["近七日收益"] },
        grid: { left: "3%", right: "4%", bottom: "3%", containLabel: true },
        // toolbox: { feature: {saveAsImage:{}}},
        xAxis: {
          type: "category",
          boundaryGap: false,
          axisTick: {
            //去掉坐标轴刻线
            show: false
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: "#1c2143" //X轴的颜色
            }
          }
        },
        yAxis: {
          type: "value",
          splitLine: {
            // show: false
            lineStyle: {
              type: "dashed",
              color: "#1c2143"
            }
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: "#1c2143" //X轴的颜色
            }
          }
        },
        series: [
          {
            name: "近七日收益",
            type: "line",
            showSymbol: false,
            smooth: true, //平滑的曲线，不再是折线
            stack: "总量",
            itemStyle: {
              normal: {
                lineStyle: {
                  width: 2,
                  color: "#19cfa3" //线条颜色
                }
              }
            },
            data: this.opinionData
          }
        ]
      });
    }
  },
  //调用
  mounted() {
    this.$nextTick(function() {
      this.drawLine(this.digname);
    });
  }
};
</script>
  
<style lang="scss" scoped>
.main {
  $type: screen;
  $proto: max-width;
  $value: 800px;

  @media #{$type} and ($proto: $value) {
    /deep/#digname {
      left: 100px !important;
    }
  }
}
</style>