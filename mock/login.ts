import { MockMethod } from 'vite-plugin-mock'
const userInfo = {
  code: 200,
  success: true,
  data: {
    accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJpc3N1c2VyIiwiYXVkIjoiYXVkaWVuY2UiLCJ0ZW5hbnRfaWQiOiIwMDAwMDAiLCJyb2xlX25hbWUiOiJhZG1pbmlzdHJhdG9yIiwidXNlcl9pZCI6IjExMjM1OTg4MjE3Mzg2NzUyMDEiLCJyb2xlX2lkIjoiMTEyMzU5ODgxNjczODY3NTIwMSIsInVzZXJfbmFtZSI6ImFkbWluIiwidGVsZXBob25lIjoiMjIyMzMzMjIiLCJ0b2tlbl90eXBlIjoiYWNjZXNzX3Rva2VuIiwiZGVwdF9pZCI6IjExMjM1OTg4MTM3Mzg2NzUyMDEiLCJhY2NvdW50IjoiYWRtaW4iLCJjbGllbnRfaWQiOiI1MTczIiwiZXhwIjoxNjYyNTQ1MTQ1LCJuYmYiOjE2NTk5NDUxNDV9.AhVhGokByjUmp6-qjfe6uYUJdhpRLtUB11nvp5e6FSo',
    tokenType: 'bearer',
    userId: '1123598821738675201',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
    userName: '管理员',
    account: 'admin',
    expiresIn: 2600000
  },
  msg: '操作成功',
  traceId: '265d2a1722124a9e'
}
export default [
  {
    url: '/mock/api/login',
    method: 'post',
    statusCode: 200,
    response: ({ query }) => {
      const { userName, passWord } = query
      console.log(userName)
      console.log(passWord)

      return userInfo
    }
  }

] as MockMethod[]
