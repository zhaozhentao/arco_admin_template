import router from '@/router'
import { getToken } from '@/utils/auth'
import { Message } from '@arco-design/web-vue'

router.beforeEach(async (to, from, next) => {
  if (to.path === '/login') {
    next()
    return
  }

  const token = getToken()
  if (!token) {
    Message.info('请先登录')
    next('/login')
    return
  }

  next()
})
