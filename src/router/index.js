import Layout from '@/layout'
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
      name: 'Table',
      path: '/table',
      component: () => import('@/views/table'),
      meta: { title: 'table' }
    }, {
      path: '/form',
      component: () => import('@/views/form'),
      meta: { title: 'form' }
    }]
  },

  {
    path: '/donate',
    component: Layout,
    meta: { title: 'Donate', icon: 'icon-idcard' }
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
