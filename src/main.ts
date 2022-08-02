import { createApp } from 'vue'
import App from './App.vue'
import '@/styles/app.scss'
import '@/styles/_global.scss'
import router from './router'
createApp(App).use(router).mount('#app')
