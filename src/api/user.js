import request from '@/utils/request'

export function login(data) {
  return request({ url: '/api/login', method: 'post', data })
}
