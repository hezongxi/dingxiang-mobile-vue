<template>
  <div class="title">
    <div class="hot">
      <div style="border-left: 0.1rem solid rgb(9, 60, 202); margin-left: 0.04rem; margin-bottom: 0.05rem;">&nbsp疫情热点 <a href="">查看更多<img src="@/assets/images/more.png" alt=""></a></div>
    
    <ul>
      <li v-for="item in news" :key='item.id'>
        <div id="zuixing">最新</div><span>{{item.title}}</span>
        <img src="@/assets/images/right.png" alt="">
      </li>
    </ul>
   </div>
  </div>
</template>

<script>
export default {
  created(){
    return api.getCovInfo().then(res => {console.log(res.data);})

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

  mounted: {},

  methods: {}
}

</script>
<style lang='less' scoped>

.hot{
  border-bottom: 1px solid #eee;
  div{
    a{
    float: right;
    font-weight: normal;
    color: #4169e2;
    font-size: 0.26rem;
    }
    img{
      margin-top:0.02rem ;
      float: right;
      width: 0.24rem;
    }
  }
}
.title{
  padding: 0.2rem;
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
       font-size: 0.1rem;
       color: #666;
    }
  }
</style>
