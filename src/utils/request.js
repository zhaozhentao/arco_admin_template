import axios from 'axios'
import { Message } from '@arco-design/web-vue'

const service = axios.create({
  baseURL: import.meta.env.VITE_HOST
})

service.interceptors.response.use(
  response => {
    const res = response.data

    if (response.status >= 400) {
      this.$message.error(response.data.message)

      return Promise.reject(new Error(res.message || 'Error'))
    }

    return response
  },
  error => {
    Message.error(error.response.data.message)

    return Promise.reject(error)
  }
)

export default service
