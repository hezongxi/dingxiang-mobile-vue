<template>
  <div>
    <div>
      <div id="main" style="width: 100%;height:400px;"></div>
      <div id="main2" style="width: 100%;height:400px;"></div>
    </div>
  </div>
</template>

<script>
export default {
  

  data () {
    return {
    };
  },
  mounted(){
    this.$myChart.chinaMap('main')
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);

  },
  components: {},

  computed: {},


}


</script>
<style lang='less' scoped>
</style>