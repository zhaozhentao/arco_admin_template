import request from '@/utils/request'

export function login() {
  return request({url: '/api/login', method: 'post'})
}
