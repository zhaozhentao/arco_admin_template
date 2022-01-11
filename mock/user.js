export default [{
  url: '/api/login',
  method: 'post',
  statusCode: 200,
  response: ({ body }) => {
    return {
      token: 'user token',
      name: 'Captain'
    }
  }
}, {
  url: '/api/logout',
  method: 'delete',
  statusCode: 200,
  response: () => {
    return {
      message: 'success'
    }
  }
}]
