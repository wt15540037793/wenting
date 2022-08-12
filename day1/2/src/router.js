import Vue from 'vue'
import Router from 'vue-router'
import Welcome from './views/welcome.vue'
import Users from './views/Users.vue'
import Gj from './views/gjhua.vue'
import tabbers from './views/tabbers.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Welcome
    },
    {
      path: '/welcome',
      component: Welcome,
      children:[
        {
          path: '/users',
          component: Users
        },
        {
          path: '/gjhua',
          component: Gj
        },
        {
          path: '/tabbers',
          component: tabbers
        },
      ]
    },
  ]
})
