import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import test from '@/components/test'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import { MdToolbar } from 'vue-material/dist/components'
Vue.use(VueMaterial)
Vue.use(Router)
Vue.use(MdToolbar)

export default new Router({
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
    }
  ]
})