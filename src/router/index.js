import Vue from 'vue'
import Router from 'vue-router'


/* Layout */
import Layout from '@/views/layout/Layout'

Vue.use(Router)

export const constantRouterMap = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
    {
      path: '/',
      component: Layout,
      redirect: 'notice',
      children: [
        {
          path: 'notice',
          component: () => import('@/views/notice/index'),
          name: 'Notice',
          meta: { title: 'notice', icon: 'notice', noCache: true }
        }
      ]
    },

    {
      path: '/flow',
      component: Layout,
      children: [
        {
          path: '/flow',
          component: () => import('@/views/flow/index'),
          name: 'Flow',
          meta: { title: 'flow', icon: 'flow', noCache: true }
        }
      ]
    },
    {
      path: '/download',
      component: Layout,
      children: [
        {
          path: '/download',
          component: () => import('@/views/download/index'),
          name: 'Download',
          meta: { title: 'download', icon: 'download', noCache: true }
        }
      ]
    },
    {
      path: '/apply',
      component: Layout,
      children: [
        {
          path: '/apply',
          component: () => import('@/views/apply/index'),
          name: 'Apply',
          meta: { title: 'apply', icon: 'apply', noCache: true }
        }
      ]
    },
    {
      path: '/family',
      component: Layout,
      children: [
        {
          path: '/family',
          component: () => import('@/views/family/index'),
          name: 'Family',
          meta: { title: 'family', icon: 'family', noCache: true }
        }
      ]
    },
    {
      path: '/claim',
      component: Layout,
      children: [
        {
          path: '/claim',
          component: () => import('@/views/claim/index'),
          name: 'Claim',
          meta: { title: 'claim', icon: 'claim', noCache: true }
        }
      ]
    },
    {
      path: '/resource',
      component: Layout,
      children: [
        {
          path: '/resource',
          component: () => import('@/views/resource/index'),
          name: 'Resource',
          meta: { title: 'resource', icon: 'resource', noCache: true }
        }
      ]
    },
  ]

export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

