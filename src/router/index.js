import Layout from '@/layout/content'
import { createRouter, createWebHashHistory } from "vue-router"

export const routes = [
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/login',
    component: () => import('@/views/login'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    meta: { title: 'Example', icon: 'icon-apps' },
    children: [{
      name: 'table',
      path: '/table',
      component: () => import('@/views/table'),
      meta: { title: 'table' }
    }, {
      name: 'form',
      path: '/form',
      component: () => import('@/views/form'),
      meta: { title: 'form' }
    }]
  },

  {
    path: '/arco',
    component: Layout,
    children: [{
      path: '',
      component: () => import('@/views/doc'),
      name: 'Arco Design',
      meta: { title: 'Arco Design Doc', icon: 'icon-bytedance-color' }
    }]
  },

  {
    path: '/editor',
    component: Layout,
    children: [{
      path: '',
      name: 'editor',
      component: () => import('@/views/editor'),
      meta: { title: 'editor', icon: 'icon-edit' }
    }]
  },

  {
    path: '/:catchAll(.*)',
    redirect: '/404',
    hidden: true
  }
]

const buildRouter = () => createRouter({
  history: createWebHashHistory(),
  routes
})

const router = buildRouter()

export default router
