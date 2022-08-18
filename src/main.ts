import { createApp } from 'vue'
import App from './App.vue'
import '@/styles/app.scss'
import '@/styles/_global.scss'
import router from './router/'
// import '@purge-icons/generated'
import pinia from '@/store/index'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
pinia.use(piniaPluginPersistedstate)
const app = createApp(App)
app.use(router).use(pinia).mount('#app')
// app.config.globalProperties.$baseColorfullLoading = baseColorfullLoading
