// 路由
import Vue from 'vue'
// 1 导入插件
import Router from 'vue-router'

// 2 安装插件
Vue.use(Router)

import Home from '../views/home/Home.vue'
import Category from '../views/category/Category.vue'
import Cart from '../views/cart/Cart.vue'
import Mine from '../views/mine/Mine.vue'
import Detail from '../views/detail/Detail.vue'

// 3 创建Router实例
const routes = [{
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/mine',
    component: Mine
  },
  {
    path: '/detail',
    component: Detail
  }
]
const router = new Router({
  routes,
  mode: 'history'
})

// 4 导出Router实例
export default router
