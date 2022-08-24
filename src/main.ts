import { createApp } from 'vue'
import App from './App.vue'
import '@/styles/app.scss'
import '@/styles/_global.scss'
// import '@purge-icons/generated'
import pinia from '@/store/index'
import router from './router/index'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
const app = createApp(App)
pinia.use(piniaPluginPersistedstate)
app.use(pinia).use(router).mount('#app')

// app.config.globalProperties.$baseColorfullLoading = baseColorfullLoading
