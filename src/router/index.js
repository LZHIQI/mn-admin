import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
Vue.use(VueRouter)
import Layout from '@/layout'

  const routes = [
  {
    path: '/',
    component: Layout
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  store,
  routes
})
export default router
