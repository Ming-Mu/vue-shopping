import Vue from 'vue'
import VueRouter from 'vue-router'
// 配置页面信息
import Home from '../views/Home.vue'
import CartPage from '../views/Cart.vue'
import ListPage from '../views/List.vue'
import MyPage from '../views/My.vue'
import AppNavPage from '../views/AppNav.vue'
// 商品详情页
import DetailPage from '../views/Detail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'AppNav',
    component:AppNavPage,
    // 配置子路由
    children:[
      {
        path: '/home',
        name: 'Home',
        component: Home
      },
      {
        path: '/cart',
        name: 'Cart',
        component: CartPage
      },
      {
        path: '/my',
        name: 'My',
        component: MyPage
      },
      {
        path: '/list',
        name: 'List',
        component:ListPage
      },
    ]
  },
  {
    path: '/detail',
    name: 'Detail',
    component:DetailPage
  }
]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router
