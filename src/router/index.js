import {createRouter, createWebHashHistory} from "vue-router"

export const routes = [
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {path: '/:catchAll(.*)', redirect: '/404', hidden: true}
]

const buildRouter = () => createRouter({
  history: createWebHashHistory(),
  routes
})

const router = buildRouter()

export default router
