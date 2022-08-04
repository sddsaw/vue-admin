import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
// const files = import.meta.glob('./modules/*.ts')
// const modulesFile = []
// for (const dire in files) {
//   files[dire]().then((res) => {
//     modulesFile.push(res.default)
//   })
// }
import systemRouter from './modules/system'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: '/',
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '首页'
        }
      },
      systemRouter
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: '登录'
    }
  }
  // ...modulesFile
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
router.beforeEach(() => {
  nprogress.start()
})
router.afterEach(() => {
  nprogress.done()
})
export default router
