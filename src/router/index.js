import Vue from 'vue'
import VueRouter from 'vue-router'

import Catalog from '../components/catalog/Catalog'
import Cart from '../components/cart/Cart'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Catalog',
    component: Catalog,
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
    props: true
  },
]

const router = new VueRouter({
  routes
})

export default router
