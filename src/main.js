import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//import echarts  from 'echarts'
import './assets/js/phone'
import './views/CovInfo/CovNumber'
import './plugins/vant'
import echarts from './plugins/echarts'
Vue.use(echarts)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
