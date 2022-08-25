import { createApp, Directive } from 'vue'
import App from './App.vue'
import '@/styles/app.scss'
import '@/styles/_global.scss'
// import '@purge-icons/generated'
import pinia from '@/store/index'
import watermark from './utils/wartermark'
import router from './router/index'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import * as directives from '@/directives'
watermark.set('vue-pre-admin')
const app = createApp(App)
pinia.use(piniaPluginPersistedstate)
app.use(pinia).use(router).mount('#app')
// TODO 自定义指令
Object.keys(directives).forEach(key => {
  app.directive(key, (directives as { [key: string]: Directive })[key])
})
// app.config.globalProperties.$baseColorfullLoading = baseColorfullLoading
