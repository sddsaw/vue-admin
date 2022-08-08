import axios, { AxiosRequestConfig } from 'axios'
import { ElMessage } from 'element-plus'
const request = axios.create({
  // baseURL: import.meta.env.VITE_APP_BASE_URL,
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' }
})
// TOTO 请求拦截
request.interceptors.request.use(function (config) {
  console.log('object :>> ', config)
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
    return res.data.data as T
  })
}
