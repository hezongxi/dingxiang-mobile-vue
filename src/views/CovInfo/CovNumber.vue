<!--  -->
<template>
  <div class="container">
      <div class="content">
          <div>截至{{covData.modifyTime|time}}全国数据统计</div>
          <ul class="wrap">
              <li>
                  <span>较昨天</span><span class="red">{{covData.currentConfirmedIncr|number}}</span>
                  <div class="bold">{{covData.currentConfirmedCount}}</div>
                  <strong>现存确诊</strong>
              </li>
              <li>
                  <span>较昨天</span><span class="green">{{covData.yesterdaySuspectedCountIncr|number}}</span>
                  <div class="bold">{{covData.suspectedCount}}</div>
                  <strong>境外输入</strong>
              </li>
              <li>
                  <span>较昨天</span><span class="orange">{{covData.seriousIncr|number}}</span>
                  <div class="bold">{{covData.seriousCount}}</div>
                  <strong>现存无症状</strong>
              </li>
              <li>
                  <span>较昨天</span><span class="other">{{covData.confirmedIncr|number}}</span>
                  <div class="bold">{{covData.confirmedCount}}</div>
                  <strong>累计确诊</strong>
              </li>
              <li>
                  <span>较昨天</span><span class="yellow">{{covData.deadIncr|number}}</span>
                  <div class="bold">{{covData.deadCount}}</div>
                  <strong>累计死亡</strong>
              </li>
              <li>
                  <span>较昨天</span><span class="blue">{{covData.curedIncr|number}}</span>
                  <div class="bold">{{covData.curedCount}}</div>
                  <strong>累计治愈</strong>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },
  filters:{
      number:function(val){
          val=val>0?'+'+val:val;
          return val;
      },
      time:function(val){
          var date = new Date(val);
          return date.toLocaleDateString();
      }
  },
  props:
      ['covData'],
  components: {},

  computed: {},

  mounted: {},

  methods: {}
}

</script>
<style lang='less' scoped>

.container{
    padding-top: 0.3rem;
    background-color: #f5f5f5;
    .content{
        padding: 0.2rem;
        div{
            font-family: -apple-system,BlinkMacSystemFont,Segoe UI,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Helvetica Neue,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;

            font-size: .12rem;
            color: #666;
        }
        .wrap{
            box-shadow:0 0 3px 2px rgba(#e7e3e3fc) ;
            display: flex;
            flex-wrap:wrap;
            margin-top:0.2rem;
            padding: 0.2rem;
            border-radius: 5.2px;
            li{
                width: 33.3333%;
                text-align: center;
                color: #666;
                strong{
                    color: #333;
                }
            span{
                font-size: 10px;
            }
            .bold{
                font-weight: bold;
                font-size: 0.33rem;
            }
            
             }
             li:nth-child(1) .bold{
                 color: red;
             }
             li:nth-child(2) .bold{
                 color: green;
             }
             li:nth-child(3) .bold{
                 color: orange;
             }
             li:nth-child(4) .bold{
                 color: #bd1362;
             }
             li:nth-child(5) .bold{
                 color: #dfd007;
             }
             li:nth-child(6) .bold{
                 color: blue;
             }
            
        }
        background-color: white;
        border-radius: 0.2rem 0.2rem 0 0;
    }
}
</style>