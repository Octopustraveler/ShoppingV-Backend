<template>
  <div ref="charts" class="charts"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "progressCharts",
  mounted() {
    let progressCharts = echarts.init(this.$refs.charts);
    progressCharts.setOption({
      xAxis: [
        {
          axisLine: {
            show: false,
          },
          min: 0,
          max: 100,
        },
      ],
      yAxis: [
        {
          type: "category", // 均分
          axisLine: {
            show: false,
          },
        },
      ],
      series: [
        {
          type: "bar",
          data: [78],
          barWidth: 10,
          color: "yellowgreen",
          showBackground: true,
          backgoundStyle: { color: "#eee" },
          label: {
            show: true,
            formatter: "|",
            position: "right",
          },
        },
      ],
      grid: { left: 0, top: 0, right: 0, bottom: 0 },
    });
  },
};
</script>

<style scoped>
.charts {
  height: 100%;
  width: 100%;
}
</style>
