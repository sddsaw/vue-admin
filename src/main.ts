import { createApp, Directive } from 'vue'
import App from './App.vue'
import '@/styles/app.scss'
// import '@purge-icons/generated'
import pinia from '@/store/index'
import appConfigStore from './store/appConfig'
import watermark from './utils/wartermark'
import router from './router/index'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import * as directives from '@/directives'
import dayjs from 'dayjs'
import '@/config'

const appConfig = appConfigStore(pinia)
if (appConfig.isWartermark) watermark.set(appConfig.wartermarkText)
const app = createApp(App)
// 错误日志上传
app.config.errorHandler = (err, vm, info) => {
  console.log(err)
  console.log(vm?.$options.__file)
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
// TODO 自定义指令
Object.keys(directives).forEach(key => {
  app.directive(key, (directives as { [key: string]: Directive })[key])
})
// app.config.globalProperties.$baseColorfullLoading = baseColorfullLoading
