import Layout from '@/layout'
import {createRouter, createWebHashHistory} from "vue-router"

export const routes = [
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/he',
    component: Layout,
    meta: {title: '一级', icon: 'icon-apps'},
    children: [{
      path: '/fuck',
      meta: {title: '二级', icon: 'icon-face-smile-fill'}
    }, {
      path: '/fuck2',
      meta: {title: '二级', icon: 'icon-face-smile-fill'},
      children: [{
        path: '/fuck2',
        meta: {title: '三级', icon: 'icon-face-smile-fill'}
      }]
    }]
  },

  {
    path: '/ha',
    component: Layout,
    meta: {title: '哈哈', icon: 'icon-apps'},
    children: [{
      path: '/fuck',
      meta: {title: '救救孩子', icon: 'icon-face-smile-fill'},
    }, {
      path: '/fuck2',
      meta: {title: '救救孩子', icon: 'icon-face-smile-fill'}
    }]
  },

  {path: '/:catchAll(.*)', redirect: '/404', hidden: true}
]

const buildRouter = () => createRouter({
  history: createWebHashHistory(),
  routes
})

const router = buildRouter()

export default router
