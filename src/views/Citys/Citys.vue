<template>
  <div id="background">
      <div><img src="@/assets/images/1.jpg" alt=""></div>
  <div><div id="border"><div id="cityMain" style="width:350px;height:350px;"></div></div></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },
  props:['name'],
  mounted(){
      this.$myChart.cityMap('cityMain',this.name,[])
  },
  components: {},

  computed: {},

  methods: {}
}

</script>
<style lang='less' scoped>
#background{
    div{
        background-color: rgb(255, 255, 255);
        img{
            
        width: 100%;
    }
    }
    div:nth-child(2){
        padding: 0.1rem;
        background-color: rgb(255, 255, 255);
        
    }
}
#border{
    box-shadow:0px 0px 10px 10px #eee;
    
}
</style>