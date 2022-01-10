export default [{
  url: '/api/login',
  method: 'post',
  statusCode: 401,
  response: ({body}) => {
    return {
      message: 'wrong',
    }
  }
}]
