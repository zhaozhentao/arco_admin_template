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
    meta: { title: 'Menu1', icon: 'icon-apps' },
    children: [{
      name: 'dashboard',
      path: '/dashboard',
      component: () => import('@/views/dashboard'),
      meta: { title: 'Dashboard' }
    }, {
      path: '/form',
      component: () => import('@/views/dashboard'),
      meta: { title: 'Form' }
    }]
  },

  {
    path: '/menu2',
    component: Layout,
    meta: { title: 'Menu2', icon: 'icon-idcard' },
    children: [{
      path: 'dashboard',
      component: () => import('@/views/dashboard'),
      meta: { title: 'Files' }
    }, {
      path: 'form',
      component: () => import('@/views/dashboard'),
      meta: { title: 'Dir' }
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
