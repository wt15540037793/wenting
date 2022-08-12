import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/components/homes.vue')
  },
  {
    path: '/index1',
    name: 'index1',
    component: () => import('@/components/index1.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
