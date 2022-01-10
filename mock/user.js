export default [{
  url: '/api/createUser',
  method: 'post',
  response: ({body}) => {
    console.log('body')
    return {
      code: 0,
      message: 'ok',
      data: '哈哈'
    }
  }
}]
