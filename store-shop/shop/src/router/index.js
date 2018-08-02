import Vue from 'vue'
import Router from 'vue-router'
import ShopRegress from '@/components/ShopRegress'
import index from '@/components/index'
import ShopLoad from '@/components/ShopLoad'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/ShopRegress',
      name: 'ShopRegress',
      component: ShopRegress
    },
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/ShopLoad',
      name: 'ShopLoad',
      component: ShopLoad
    },
  ]
})
