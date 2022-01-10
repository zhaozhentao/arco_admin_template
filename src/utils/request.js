import axios from 'axios'
import {Message} from "@arco-design/web-vue";

const service = axios.create({
  baseURL: import.meta.env.VITE_HOST
})

service.interceptors.response.use(
  response => {
    if (response.status >= 400) {
      this.$message.error(response.data.message)
    }
  },
  error => {
    Message.error(error.response.data.message)

    return Promise.reject(error)
  }
)

export default service
