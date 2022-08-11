import { createApp } from 'vue'
import App from './App.vue'
import '@/styles/app.scss'
import '@/styles/_global.scss'
import router from './router/'
// import '@purge-icons/generated'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { baseColorfullLoading } from '@/utils/common'
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
const app = createApp(App)
app.config.globalProperties.$baseColorfullLoading = baseColorfullLoading
app.use(router).use(pinia).mount('#app')
