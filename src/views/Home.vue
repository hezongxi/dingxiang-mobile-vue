
<template>

  <div>
      <div>
          <img src="../assets/images/1.jpg" alt="" width="100%">
          <CovInfo :news='news'/>
      </div> 
      <div class="list">
          <div>
          <router-link to='/hesuan'>
            <img src="@/assets/images/2.png" alt="">
            <div>核酸检测</div>
          </router-link>
          </div>
          <div>
              <router-link to="/wuzi">
              <img src="@/assets/images/3.png" alt="">
              <div>防疫物资</div>
              </router-link>
          </div>
          <div>
            <img src="@/assets/images/4.png" alt="">
            <div>出行政策</div>
          </div>
          <div>
            <router-link to='/area'>
              <img src="@/assets/images/1.png" alt="">
              <div>风险地区</div>
            </router-link>
          </div>
        </div>
        <div>

          <CovNumber :covData="covData"/>
          <ChinaMap/>
        </div>
  </div>
  
</template>

<script>
import CovInfo from './CovInfo/CovInfo.vue'; 
import api from "../api/index"
import CovNumber from "./CovInfo/CovNumber.vue"
import ChinaMap from '@/views/VueEharts/ChinaMap.vue'
export default {
    components: {
    CovInfo,
    CovNumber,
    ChinaMap
},
  data () {
    return {
      news:[],
      covData:{}
    };
  },
  created() {
    api.getCovInfo().then((res) => {
      console.log(res.data);
      console.log(res.data.newslist[0]);
      console.log(res.data.newslist[0].desc);
      this.news = res.data.newslist[0].news;
      console.log(this.news);
      let data = res.data.newslist[0].desc
      this.covData = {
        currentConfirmedCount: data.currentConfirmedCount,
        confirmedCount: data.confirmedCount,
        suspectedCount: data.suspectedCount,
        curedCount: data.curedCount,
        deadCount: data.deadCount,
        seriousCount: data.seriousCount,
        suspectedIncr: data.suspectedIncr,
        currentConfirmedIncr: data.currentConfirmedIncr,
        confirmedIncr: data.confirmedIncr,
        curedIncr: data.curedIncr,
        deadIncr: data.deadIncr,
        seriousIncr: data.seriousIncr,
        modifyTime: data.modifyTime,
        yesterdaySuspectedCountIncr: data.yesterdaySuspectedCountIncr,
        modifyTime: data.modifyTime,
        yesterdayConfirmedCountIncr:data.yesterdayConfirmedCountIncr
      };
    })
  }


}

</script>
<style lang='less' scoped>
.list{
    display: flex;
    padding-bottom: 0.2rem;
    >div{
      flex: 1;
      text-align: center;
      color: #666;
       img{
        width: 0.8rem;
        height: 0.8rem;
      }
    }
}

</style>