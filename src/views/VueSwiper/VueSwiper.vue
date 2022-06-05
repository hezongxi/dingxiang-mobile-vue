<!--  -->
<template>
<div>
  <swiper ref="mySwiper" :options="swiperOptions">
    <swiper-slide>
      <img src="@/assets/logo.png" alt="">
    </swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 4</swiper-slide>
    <swiper-slide>Slide 5</swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
  <ul class="list">
    <li v-for="(item,index) in arr" :key='index' :class="{active: index==num}" @click='changeSwiper(index)'>
      <div class="item">{{item}}</div>
      </li>
  </ul>
</div>
</template>


<script>
  export default {
    name: 'carrousel',
    data() {
      let that = this;
      return {
        num:0,
        arr:[1,2,3,4,5],
        swiperOptions: {
          pagination: {
            el: '.swiper-pagination'
          },
          autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
          },
          loop:true,
          on:{slideChangeTransitionEnd: function(){ 
              console.log(this.activeIndex);
        //每个slide切换结束时也运行当前slide动画
        //this.slides.eq(this.activeIndex).find('.ani').removeClass('ani'); 动画只展现一次，去除ani类名
            } 
          }
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper
      }
    },
    mounted() {
      console.log('Current Swiper instance object', this.swiper)
      this.swiper.slideTo(3, 1000, false)
    },
    methods:{
        changeSwiper(index){
          this.num=index
          this.swiper.slideTo(index+1,1000,false)
        }
    }
  }
</script>
<style lang='less' scoped>
.list{
  display: flex;
  li{
    float: left;
    flex:1;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    padding: .1rem;
    color: #666;
    text-align: center;
    background: #f7f7f7;
    border-radius: .02rem;
    margin:0.1rem;
  }
  .active{
    background: #f1f5ff;
    color:#4169e2 ;
  }
}
</style>