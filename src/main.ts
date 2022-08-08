import { createApp } from 'vue'
import App from './App.vue'
import '@/styles/app.scss'
import '@/styles/_global.scss'
import router from './router'
// import '@purge-icons/generated'
import { createPinia } from 'pinia'
createApp(App).use(router).use(createPinia()).mount('#app')
