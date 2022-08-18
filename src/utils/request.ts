// import { getCurrentInstance } from 'vue'
import { baseColorfullLoading } from '@/utils/common'

import axios, { AxiosRequestConfig } from 'axios'
import { ElMessage, ElMessageBox } from 'element-plus'
import userStore from '@/store/userInfo'
import router from '@/router/'
const createUserStroe = userStore()
const request = axios.create({
  // baseURL: import.meta.env.VITE_APP_BASE_URL,
  timeout: 1000,
  headers: { 'Content-Type': 'application/json' }
})
// const { ctx } = getCurrentInstance()
// console.log(getCurrentInstance(), '----')
// TOTO 请求拦截
// eslint-disable-next-line no-unused-vars
let loadingInstance :any
request.interceptors.request.use(config => {
  if (createUserStroe.userInfo && createUserStroe.userInfo.accessToken) {
    // TODO 加此判断是因为headers里面是有可能为null，校验不过
    if (config && config?.headers) config.headers.Authorization = `Basic ${createUserStroe.userInfo.accessToken}`
  }
  if (config.loading) loadingInstance = baseColorfullLoading()
  return config
}, error => {
  console.log(error)
  return Promise.reject(error)
})

/**
 * @description: 响应拦截 统一处理接口响应错误，比如token过期无效，服务端异常等
 * @param {*} function
 * @return {*}
 */
// TODO控制登录过期的锁
let isRefreshing = false
request.interceptors.response.use(response => { // http状态码为200，但是code不为200在这里处理
  if (loadingInstance) loadingInstance.close()
  const code:number = response.data.code
  // 容错率 正常情况下 和非json类型
  if (!code || code === 200) {
    return response
  } else if (code === 401) {
    // TODO 处理登录过期
    if (isRefreshing) return Promise.reject(response)
    isRefreshing = true
    ElMessageBox.confirm('您的登录已过期，您可以取消停留在此页面，或确认重新登录', '登录过期', {
      confirmButtonText: '确认',
      cancelButtonText: '取消',
      showClose: false,
      closeOnClickModal: false
    }).then(() => {
      createUserStroe.resetState()
      router.push({
        name: 'login',
        query: {
          redirect: router.currentRoute.value.fullPath
        }
      })
    }).finally(() => {
      isRefreshing = false
    })
    // TODO 在内部消化掉这个业务异常，阻止代码往下走
    return Promise.reject(response)
  }
  ElMessage.error(response.data.msg || '请求失败，请稍后重试')
  return Promise.reject(response)
}, error => { // http状态码不为200 在这里处理
  if (loadingInstance) loadingInstance.close()
  return Promise.reject(error)
})

/**
 * @description: 自定义添加AxiosRequestConfig属性  {loading?:boolean} &
 * @param {*} any
 * @return {*}
 */
export default <T = any>(config:AxiosRequestConfig) => {
  return request(config).then(res => {
    return (res.data.data || res.data) as T
  })
}
