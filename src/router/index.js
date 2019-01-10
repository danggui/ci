import Vue from 'vue'
import Router from 'vue-router'


/* Layout */
import Layout from '@/views/layout/Layout'

Vue.use(Router)

export const constantRouterMap = [
  {
    title: '保险服务',
    path: '/main',
    component: Layout,
    redirect: 'main',
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
          meta: { title: 'notice', icon: 'notice', noCache: true, words:true, }
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
          meta: { title: 'flow', icon: 'flow', noCache: true, words:true, }
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
          meta: { title: 'download', icon: 'download', noCache: true, words:true, }
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
          meta: { title: 'apply', icon: 'apply', noCache: true, words:false }
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
          meta: { title: 'family', icon: 'family', noCache: true,words:false }
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
          meta: { title: 'claim', icon: 'claim', noCache: true,words:false }
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
          meta: { title: 'resource', icon: 'resource', noCache: true,words:false }
        }
      ]
    },
  ]
  export const mobilePage=[
    {
      path: '/mobile',
      component: Layout,
      children: [
        {
          path: '/mobile',
          component: () => import('@/views/mobile/index'),
          name: 'Phote',
          meta: { title: 'photo', icon: 'photo', noCache: true,words:false }
        }
      ]
    }
  ]

export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap.concat(mobilePage)
})

