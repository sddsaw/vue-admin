import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import userStore from '@/store/userInfo'
const files = import.meta.glob('./modules/*.ts')
const modulesFile :any = []
for (const dire in files) {
  files[dire]().then((res) => {
    modulesFile.push(res.default)
  })
}
NProgress.configure({
  speed: 500, // 速度设置毫秒ms
  trickle: false, // 关闭进度条步进
  trickleSpeed: 800, // 度条步进速度毫秒ms
  showSpinner: false // 关闭进度环 默认true
})
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: '/',
    component: () => import('@/layout/index.vue'),
    redirect: '/',
    meta: {
      requiresAuth: true,
      title: '首页'
    },
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '首页'
        }
      },
      ...modulesFile
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
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
router.beforeEach((to, from) => {
  const createUserStore = userStore()
  const token = createUserStore.userInfo?.accessToken
  if (to.meta.requiresAuth && !token) {
    return {
      path: '/login',
      query: { redirect: to.fullPath }
    }
  }
  NProgress.start()
})
router.afterEach(() => {
  NProgress.done()
})
export default router
