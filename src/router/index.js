import Vue from 'vue'
import VueRouter from 'vue-router'
//第一层
import Home from '../views/Home'
import Cart from '../views/Cart'
import Friends from '../views/Friends'
import Search from '../views/Search'
// home组件里的页面
import NewsList from '../views/Home/home/NewsList'
import Newslnfo from '../views/Home/home/Newslnfo'

Vue.use(VueRouter)

const routes = [
    {
      path:'/',
      redirect:"/Home"
    },
    {
      path:'/home',
      component:Home
    },
    // home子组件
    {
      path:'/home/newsList',
      component:NewsList
    },
    {
      path:'/home/newslnfo/:id',
      component:Newslnfo
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
