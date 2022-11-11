import { createApp, Directive } from 'vue'
// import '@purge-icons/generated'
import '@/config'
import dayjs from 'dayjs'
import '@/styles/app.scss'
import App from './App.vue'
import pinia from '@/store/index'
import router from './router/index'
import * as directives from '@/directives'
import appConfigStore from './store/appConfig'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const appConfig = appConfigStore(pinia)
const app = createApp(App)
// 错误日志上传
app.config.errorHandler = (err, vm, info) => {
  console.log(err)
  console.log(vm)
  console.log(info)
  appConfig.ADD_ERROELOG({
    err,
    file: vm?.$options.__file,
    info,
    time: dayjs().valueOf()
  })
}
pinia.use(piniaPluginPersistedstate)
app.use(pinia).use(router).mount('#app')
/**
 * @description: 自定义指令注册
 * @param {*} directives
 * @return {*}
 */
Object.keys(directives).forEach(key => {
  app.directive(key, (directives as { [key: string]: Directive })[key])
})
// app.config.globalProperties.$baseColorfullLoading = baseColorfullLoading
