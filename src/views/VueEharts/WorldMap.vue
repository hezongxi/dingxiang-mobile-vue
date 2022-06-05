<template>
<div>
  <div>世界地图</div>
    <van-tabs v-model="active" animated @change='change'>
        <van-tab title="现存确诊">
          <div id="worldMain" style="width:375px;height:250px;"></div>
        </van-tab>
        <van-tab title="累计确诊">
          <div id="subMain" style="width:7.5rem;height:275px;"></div>
        </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },

  components: {},

  computed: {},

  mounted(){
      this.$nextTick(()=>{
          this.$myChart.worldMap("worldMain")})
          
          
          },


  methods: {
    change(title){
      console.log(title)
      if (title==1){
        this.$nextTick(()=>{
          this.$myChart.worldMap("subMain")
          
        })
      }
    }

  },
  computed: {},

}

</script>
<style lang='less' scoped>
.box::before{
    content: "";
    border-left: 0.1rem solid #09b0ca;
    font-size: 0.26rem;
    margin-right: 0.1rem;
}
.box{
  padding: 0.4rem;
  margin-left:0.1rem ;
  margin-right:0.1rem ;
  border-top:solid 1px #eee ;
  margin-left:0.2rem ;
  padding-left:0.1rem ;
}
#main{
  background: #f5f5f5;
}
#nowMain{
  background: #f5f5f5;
}
</style>