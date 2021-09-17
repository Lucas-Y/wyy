import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// - Layout
//   - Home
//   - Search
// - Play

//  @ => src 的别名

import Layout from '@/views/Layout'
import Home from '@/views/Home'
import Search from '@/views/Search'
import Play from '@/views/Play'

export default new VueRouter({
  mode: 'history',
  // 路由规则
  routes: [
    {
      path: '/',
      redirect: '/layout',
    },
    {
      name: 'layout',
      path: '/layout',
      component: Layout,
      children: [
        {
          path: '/layout',
          redirect: '/layout/home',
        },
        {
          path: 'home',
          component: Home,
          meta: {
            title: '首页',
          },
        },
        {
          path: 'search',
          component: Search,
          meta: {
            title: '搜索',
          },
        },
      ],
    },
    {
      name: 'play',
      // ???
      path: '/play/:id',
      component: Play,
    },
  ],
})
