<!--  -->
<template>
  <div class="bg">
    <div class="panel">
      <div class="title">全国高风险地区汇总</div>
        <div>
          <img src="@/assets/images/high.png" alt="">
            高风险地区4个
        </div>
        <ul>
          <li v-for="(item,index) in high" :key='index'>
          {{item}}
          </li>
        </ul>
        <div>
          <img src="@/assets/images/mid.png" alt="">
          中风险地区21个</div>
        <ul>
          <li v-for="(item,index) in mid" :key='index'>
          {{item}}
          </li>
        </ul>
   </div>
  </div>
</template>

<script>
import api from '@/api/index'
export default {
  data () {
    return {
      high:[],
      mid:[]
    };
  },
  created(){
    api.getCovInfo().then(res=>{
      console.log(res.data.newslist[0].riskarea);
      let riskarea = res.data.newslist[0].riskarea
      this.high=riskarea.high
      this.mid=riskarea.mid
    })
  },
  components: {},

  computed: {},

  mounted: {},

  methods: {}
}

</script>
<style lang='less' scoped>
.bg{
  .panel{
    div{
      padding-top: 0.2rem;
      padding-bottom: 0.2rem;
      img{
        width: 14px;
        vertical-align: top;
      }
    }
    ul{
      li{
        margin-bottom: 0.2rem;
        color: #333;
        background: #f7f7f7;
        padding: 0.1rem;
        border-radius: 0.15rem;
        letter-spacing: 0.01rem;
        line-height: 0.5rem;
      }
    }
  }
  height: 3.6rem;
  background: url("../../assets/images/area.png") no-repeat;
  background-size: cover;
  padding-top: 2.6rem;
}
.panel{
  margin-bottom: 0.2rem;
  margin-right: 0.2rem;
  margin-left: 0.2rem;
  background-color:white ;
  border-radius: 0.12rem;
  padding: 0.2rem;
}
.title{
  border-left: 6px solid blue;
  padding-top: 0rem !important;
  padding-bottom: 0rem !important;
  padding-left: 5px !important;
}

</style>