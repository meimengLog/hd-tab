import Vue from 'vue'
import Router from 'vue-router'
import Home from '../examples/views/Home.vue'

Vue.use(Router)

// export default
var routers = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta:{
        title:'首页'
      },
      children: [
        {
          path: '/demo',
          name: 'demo',
          meta:{
            title: 'page1',
          },
          // component: () => import(/* webpackChunkName: "about" */ '../views/home/demo.vue')
          component: resolve => (require(['../examples/views/home/demo.vue'], resolve)),
        },
        {
          path: '/shop/Carry',
          name: 'Carry',
          meta:{
            title: 'page2',
          },
          // component: () => import(/* webpackChunkName: "about" */ '../views/home/demo.vue')
          component: resolve => (require(['../examples/views/home/Carry.vue'], resolve)),
        },
        {
          path: '/index/calc',
          name: 'calc',
          meta:{
            title: 'page3',
          },
          // component: () => import(/* webpackChunkName: "about" */ '../views/home/demo.vue')
          component: resolve => (require(['../examples/views/home/calc.vue'], resolve)),
        },
        {
          path: '/shop/Orders',
          name: 'orders',
          meta:{
            title: 'orders',
          },
          // component: () => import(/* webpackChunkName: "about" */ '../views/home/demo.vue')
          component: resolve => (require(['../examples/views/home/orders.vue'], resolve)),
        },
        {
          path: '/shop/Report',
          name: 'report',
          meta:{
            title: 'report',
          },
          // component: () => import(/* webpackChunkName: "about" */ '../views/home/demo.vue')
          component: resolve => (require(['../examples/views/home/orders.vue'], resolve)),
        },
      ],
    },
  ]
})
export default routers
