<template>
  <div>
    <div class="box">国内疫情地图</div>
          <van-tabs v-model="active" animated @change='change'>
        <van-tab title="现存确诊">
          <div id="nowMain" style="width:7.5rem;height:7rem;"></div>
        </van-tab>
        <van-tab title="累计确诊">
          <div id="main" style="width:7.5rem;height:7rem;"></div>
        </van-tab>
      </van-tabs>
  </div>
</template>

<script>
import api from '@/api/index';
export default {
  data () {
    return {
      active: 0,
      arr:[]
    };
  },
  mounted(){

      api.getChinaData().then(res =>{
        
        console.log(res.data)
        let citys=res.data.retdata
        let arr=[]
        for(let i=0;i<citys.length;i++){
          let obj={}
          obj.name=citys[i].xArea;
          obj.value=citys[i].confirm
          obj.value=citys[i].confirm
          arr.push(obj)
          let now={}
          now.name=citys.xArea
          now.value=citys.curConfirm
          arr.push(now)
          
        }
        this.arr=arr
        console.log(arr);

      })
        this.$nextTick(()=>{
          this.$myChart.chinaMap("nowMain",this.arr)})
        
       
  },
  methods: {
    change(title){
      console.log(title)
      if (title==1){
        this.$nextTick(()=>{
          this.$myChart.chinaMap("main",this.arr)
          
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