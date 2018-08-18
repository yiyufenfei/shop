import Vue from 'vue'
import Router from 'vue-router'
import ShopRegress from '@/components/ShopRegress'
import index from '@/components/index'
import ShopLoad from '@/components/ShopLoad'
import Shopcar from '@/components/Shopcar'
import ShopGoddsInfo from '@/components/ShopGoddsInfo'
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
    {
      path: '/Shopcar',
      name: 'Shopcar',
      component: Shopcar
    },
    {
      path: '/ShopGoddsInfo',
      name: 'ShopGoddsInfo',
      component: ShopGoddsInfo
    },
  ]
})
