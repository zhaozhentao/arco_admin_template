export default [{
  url: '/api/login',
  method: 'post',
  statusCode: 200,
  response: ({body}) => {
    return {
      token: 'user token',
      name: 'Captain'
    }
  }
}]
