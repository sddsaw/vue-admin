import axios, { AxiosRequestConfig } from 'axios'
import { ElMessage } from 'element-plus'
import userStore from '@/store/modules/user'

const request = axios.create({
  // baseURL: import.meta.env.VITE_APP_BASE_URL,
  timeout: 1000,
  headers: { 'Content-Type': 'application/json' }
})
// TOTO 请求拦截
request.interceptors.request.use(function (config) {
  const createUserStroe = userStore()
  if (createUserStroe.userInfo && createUserStroe.userInfo.accessToken) {
    // TODO 加此判断是因为headers里面是有可能为null，校验不过
    if (config && config?.headers) config.headers.Authorization = `Basic ${createUserStroe.userInfo.accessToken}`
  }
  return config
}, function (error) {
  console.log(error)
  return Promise.reject(error)
})

/**
 * @description: 响应拦截 统一处理接口响应错误，比如token过期无效，服务端异常等
 * @param {*} function
 * @return {*}
 */
request.interceptors.response.use(function (response) { // http状态码为200，但是code不为200在这里处理
  const code = response.data.code && response.data.code !== 200
  if (code) {
    ElMessage.error(response.data.msg || '请求失败，请稍后重试')
    return Promise.reject(response.data)
  }
  return response
}, function (error) { // http状态码不为200 在这里处理
  console.log(error)
  return Promise.reject(error)
})
export default <T = any>(config: AxiosRequestConfig) => {
  return request(config).then(res => {
    return (res.data.data || res.data) as T
  })
}
