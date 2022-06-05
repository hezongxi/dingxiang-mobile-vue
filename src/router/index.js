import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Hesuan from '@/views/CovInfo/Hesuan'
import Area from '@/views/Area'
import Wuzi from '@/views/Wuzi'
import Citys from '@/views/Citys/Citys.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'app',
    component: Home
  },
  {
    path: '/hesuan',
    component: Hesuan
  },
  {
    path: '/area',
    component: Area
  },
  {
    path: '/wuzi',
    component: Wuzi
  },
  {
    path: '/citys/:name',
    component: Citys,
    props:true,
  }



]

const router = new VueRouter({
  routes
})

export default router
