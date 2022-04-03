import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Cart from '../views/Cart'
import Friends from '../views/Friends'
import Search from '../views/Search'

Vue.use(VueRouter)

const routes = [
    {
      path:'/home',
      component:Home
    },
    {
      path:'/cart',
      component:Cart
    },
    {
      path:'/friends',
      component:Friends
    },
    {
      path:'/search',
      component:Search
    }
]

const router = new VueRouter({
  routes
})

export default router
