import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('./views/index/index.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
        path:'/weibo',
        name:'weibo',
        component: () => import(/* webpackChunkName: "about" */ './views/trace/trace.vue'),
        children: [
            {
                path: 'trace',
                name: 'trace',
                component: () => import(/* webpackChunkName: "about" */ './views/trace/trace.vue')
            }
        ]
    },
  ]
})
