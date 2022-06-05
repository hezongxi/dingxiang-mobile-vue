<template>
  <div class="title">
    <div class="nav"><img src="@/assets/images/hot.png" alt="" class="icon"> <a href="https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&srcqid=6422609957654521064&tn=91064651_hao_pg&wd=%E7%96%AB%E6%83%85&oq=%25E7%2596%25AB%25E6%2583%2585%25E6%259D%25BF%25E5%259D%2597%25E6%2596%25B0%25E9%2597%25BB&rsv_pq=837544a400074bec&rsv_t=ee6a53EZSTVGKUgB1sGYyaDylONuUlGOfNmME6QwrIxHdiHWrCMi7nEDZNNPApuArV%2FqNM4L&rqlang=cn&rsv_dl=tb&rsv_enter=0&rsv_btype=t&inputT=670&rsv_sug3=354&rsv_sug1=322&rsv_sug7=100&rsv_sug2=0&rsv_sug4=670">查看更多<img src="@/assets/images/more.png" alt=""></a></div>
    <div class="hot">
      <div style="border-left: 0.1rem solid rgb(9, 60, 202); margin-left: 0.04rem; margin-bottom: 0.05rem;"></div>
    
    <ul>
      <li v-for="(item,index) of news" :key='index'>
        <div id="zuixing">最新</div><span @click="middleMethods(index)">{{item.title}}</span>
        <img src="@/assets/images/right.png" alt="">
      </li>
    </ul>
   </div>
  </div>
</template>

<script>
import api from '@/api/index';


export default {
  data(){
    return {
      sourceUrl:[]
    }
  },
  mounted(){
    api.getCovInfo().then(res =>{
        console.log(res.data)
        console.log(this.news)
        this.news.forEach((item,index,news) =>{
        console.log(item.sourceUrl)
        this.sourceUrl.push(item.sourceUrl)
        
        })
        console.log(this.sourceUrl);
        })
        
  },
  components: {},

  props:{
        covDesc: {
      type: Object,
      default: function () {
        return {};
      },
    },
    news:{
      type:Array,
      default:function() {
        return[];
      }
    }
  },

  computed: {},


  methods: {
    middleMethods (type) {
      console.log(type);
        switch (type) {
          case 0: window.open(this.sourceUrl[0],' _self');
          console.log(this.sourceUrl[0]);
          break
          case 1: window.open(this.sourceUrl[1],' _self');
          break
          case 2: window.open(this.sourceUrl[2],' _self');
          break
          case 3:window.open(this.sourceUrl[3],' _self');
          break
          case 4:window.open(this.sourceUrl[4],' _self');
        
      
      }
    }
  }
}

</script>
<style lang='less' scoped>

.hot{
  border-bottom: 1px solid #eee;
  div{


    img{
      margin-top:0.02rem ;
      float: right;
      width: 0.24rem;
    }
  }
}
.title{
  padding: 0.2rem;
    .nav{
      margin-bottom: 0.15rem;
      a{
      float: right;
      font-weight: normal;
      color: #4169e2;
      font-size: 0.26rem;
        img{
            width: 0.26rem;
        }
      }
      .icon{
        
        vertical-align: top;
        width:1.2rem;
      }
      
    }
    .nav::before{
    content: "";
    border-left: 0.1rem solid #09b0ca;
    font-size: 0.26rem;
    margin-right: 0.1rem;
    }
  ul{
    img{
      float:right;
      width: 0.24rem;
    }
    #zuixing{
    background-color: #f74c31;
    display: inline-block;
    height: .36rem;
    margin-top: .03rem;
    margin-right: .04rem;
    padding: 0 .02rem;
    color: #fff;
    font-weight: 500;
    font-size: 0.25rem;
    line-height: .36rem;
    text-align: center;
    vertical-align: top;
    border-radius: .1rem;
}
    }
    li{
       line-height: 0.44rem;
       margin-bottom: 0.2rem;
       letter-spacing: 0.03rem;
       font-size: 0.3rem;
       color: #666;
    }
  }
</style>
