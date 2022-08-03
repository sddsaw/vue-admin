import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// const files = import.meta.glob('./modules/*.ts')
// const modulesFile = []
// for (const dire in files) {
//   files[dire]().then((res) => {
//     modulesFile.push(res.default)
//   })
// }
import systemRouter from './modules/system'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: '/',
    redirect: '/home',
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '首页'
        }
      },
      systemRouter
    ]
  }
  // ...modulesFile
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
