import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Hesuan from '@/views/Hesuan'
import Area from '@/views/Area'
import Wuzi from '@/views/Wuzi'
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
  }

]

const router = new VueRouter({
  routes
})

export default router
