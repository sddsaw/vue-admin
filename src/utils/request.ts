import axios, { AxiosRequestConfig } from 'axios'
const request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' }
})
request.interceptors.request.use(function (config) {
  return config
}, function (error) {
  return Promise.reject(error)
})

request.interceptors.response.use(function (response) {
  return response
}, function (error) {
  return Promise.reject(error)
})
export default <T = any>(config: AxiosRequestConfig) => {
  return request(config).then(res => {
    return res.data.data as T
  })
}
