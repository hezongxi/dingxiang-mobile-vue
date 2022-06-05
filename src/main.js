import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//import echarts  from 'echarts'
import './assets/js/phone'
import './views/CovInfo/CovNumber'
import './plugins/vant'
import echarts from './plugins/echarts'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import '../node_modules/swiper/css/swiper.css'

Vue.use(VueAwesomeSwiper)
fastClick.attach(document.body)
Vue.use(echarts)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
