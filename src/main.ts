import { createApp } from 'vue'
import App from './App.vue'
import '@/styles/app.scss'
import '@/styles/_global.scss'
import router from './router'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { createPinia } from 'pinia'
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(router).use(createPinia()).mount('#app')
