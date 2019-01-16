import Vue from 'vue'
import Router from 'vue-router'


/* Layout */
import Layout from '@/views/layout/Layout'
import { MessageBox } from 'element-ui';
import Storage from "@/utils/storage"

Vue.use(Router)

export const constantRouterMap = [
  {
    title: '保险服务',
    path: '/main',
    component: Layout,
    redirect: 'main',
    label:"title_service"
  },
    {
      path: '/',
      component: Layout,
      redirect: 'ci/notice',
      children: [
        {
          path: 'ci/notice',
          component: () => import('@/views/notice/index'),
          name: 'Notice',
          meta: { title: 'notice', icon: 'notice', noCache: true, words:true, }
        }
      ]
    },

    {
      path: '/ci/flow',
      component: Layout,
      children: [
        {
          path: '/ci/flow',
          component: () => import('@/views/flow/index'),
          name: 'Flow',
          meta: { title: 'flow', icon: 'flow', noCache: true, words:true, }
        }
      ]
    },
    {
      path: '/ci/download',
      component: Layout,
      children: [
        {
          path: '/ci/download',
          component: () => import('@/views/download/index'),
          name: 'Download',
          meta: { title: 'download', icon: 'download', noCache: true, words:true, }
        }
      ]
    },
    {
      path: '/ci/apply',
      component: Layout,
      children: [
        {
          path: '/ci/apply',
          component: () => import('@/views/apply/index'),
          name: 'Apply',
          meta: { title: 'apply', icon: 'apply', noCache: true, words:false }
        }
      ]
    },
    {
      title: '我的账户',
      path: '/account',
      component: Layout,
      redirect: 'account',
      label:"title_account"
    },
    {
      path: '/ci/family',
      component: Layout,
      children: [
        {
          path: '/ci/family',
          component: () => import('@/views/family/index'),
          name: 'Family',
          meta: { title: 'family', icon: 'family', noCache: true,words:false }
        }
      ]
    },
    {
      path: '/ci/claim',
      component: Layout,
      children: [
        {
          path: '/ci/claim',
          component: () => import('@/views/claim/index'),
          name: 'Claim',
          meta: { title: 'claim', icon: 'claim', noCache: true,words:false }
        }
      ]
    },
    {
      path: '/ci/resource',
      component: Layout,
      children: [
        {
          path: '/ci/resource',
          component: () => import('@/views/resource/index'),
          name: 'Resource',
          meta: { title: 'resource', icon: 'resource', noCache: true,words:false }
        }
      ]
    },
  ]
  export const mobilePage=[
    {
      path: '/ci/mobile',
      component: Layout,
      children: [
        {
          path: '/ci/mobile',
          component: () => import('@/views/mobile/index'),
          name: 'Phote',
          meta: { title: 'photo', icon: 'photo', noCache: true,words:false }
        }
      ]
    }
  ]

const router = new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap.concat(mobilePage)
})
router.beforeEach((to, from, next) => {
   if(from.path == "/apply") {
  MessageBox.confirm('编辑内容未保存，是否离开？','提示',{
  confirmButtonText: '确定',
  cancelButtonText: '取消',
   }).then(
     ()=>{ next() }
  ).catch( ()=>next(false) ) 
  
}else { 
next() //必须加
}
})
export default router 
