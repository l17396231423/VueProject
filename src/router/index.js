import Vue from 'vue'
import VueRouter from 'vue-router'
import better from '../views/better.vue'
import Home from '../views/home/index.vue'
import allgoods from '../views/allgoods'
import detail from '../views/detail'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'better',
    component: better,
    children: [
      {
        path: '/',
        name: 'Home',
        component: Home
      },{
        path:'/allgoods',
        name:'allgoods',
        component: allgoods
      }
    ]
  },{
    path:'/detail',
    name:'detali',
    component:detail
  }
]

const router = new VueRouter({
  routes
})

export default router
