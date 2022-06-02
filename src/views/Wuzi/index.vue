<!--  -->
<template>
<div class="title">
    <img src="@/assets/images/wuzi.png" alt="">
    <div class="container">
        <div class="tab">
            <van-tabs v-model="active" animated>
            <van-tab title="消毒剂">
                <img src="@/assets/images/jiujing.png" alt="">
            </van-tab>
            <van-tab title="口罩">
                <img src="@/assets/images/kouzhao.png" alt="">
            </van-tab>
            </van-tabs>
        </div>
    </div>
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

  mounted: {},

  methods: {}
}

</script>
<style lang='less' scoped>
.title{
    background: #3343ff;
    img{
        width: 100%;
    }
}
.container{
    margin: 0.2rem;
    padding: 0.2rem;
    background: white;
    border-radius: 0.1rem;
}
</style>