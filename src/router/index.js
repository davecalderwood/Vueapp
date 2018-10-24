import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import test from '@/components/test'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import { MdToolbar, MdBottomBar } from 'vue-material/dist/components'
import about from '@/components/about';
import name from '@/components/contact'
import login from '@/components/Login'
import register from '@/components/register'
import products from '@/components/products'
import cart from '@/components/cart'
import orders from '@/components/orders'
import {mapState} from 'vuex'
Vue.use(VueMaterial)
Vue.use(Router)
Vue.use(MdToolbar)

export default new Router({
  computed: {
    ...mapState(['isLoggedIn'])
  },
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/test',
      name:'test',
      component: test,
    },
    {
      path:'/about',
      name:'about',
      component: about,
    },
    { path:'/name',
    name:'name',
    component: name,
  },
  {
    path:'/login',
    name: 'login',
    component:login,
    meta: {isLoggedIn: true}
  },
  {
    path: '/register',
    name:'register',
    component: register,
    meta: {isLoggedIn: true}
  },
  {
    path: '/products',
    name: 'products',
    component: products
  },
  {
    path:'/cart',
    name: 'cart',
    component: cart
  },
{
  path:'/orders',
  name: 'orders',
  component: orders
}
  ]
})
