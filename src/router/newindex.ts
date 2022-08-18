import { createRouter, createWebHashHistory } from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import pinia from '@/store/index'
import { storeToRefs } from 'pinia'
import { staticRoutes } from '@/router/route'
import { useKeepALiveNamesStroe } from '@/store/keepAliveNames'
import userStore from '@/store/userInfo'
import { useRoutesList } from '@/store/routesList'
import appConfig from '@/store/appConfig'

// import { Session } from '/@/utils/storage';
// import { initFrontEndControlRoutes } from '/@/router/frontEnd';
import { initBackEndControlRoutes } from '@/router/backEnd'

// 读取 `/src/stores/themeConfig.ts` 是否开启后端控制路由配置
const storesThemeConfig = appConfig(pinia)
const userInfoStore = userStore(pinia)
console.log(userInfoStore)
const { isRequestRoutes } = storeToRefs(storesThemeConfig)
console.log(isRequestRoutes)
export const router = createRouter({
  history: createWebHashHistory(),
  routes: staticRoutes
})
/**
 * 路由多级嵌套数组处理成一维数组
 * @param arr 传入路由菜单数据数组
 * @returns 返回处理后的一维路由菜单数组
 */
export function formatFlatteningRoutes (arr: any) {
  if (arr.length <= 0) return false
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].children) {
      arr = arr.slice(0, i + 1).concat(arr[i].children, arr.slice(i + 1))
    }
  }
  console.log(arr)
  return arr
}

/**
 * 一维数组处理成多级嵌套数组（只保留二级：也就是二级以上全部处理成只有二级，keep-alive 支持二级缓存）
 * @description isKeepAlive 处理 `name` 值，进行缓存。顶级关闭，全部不缓存
 * @link 参考：https://v3.cn.vuejs.org/api/built-in-components.html#keep-alive
 * @param arr 处理后的一维路由菜单数组
 * @returns 返回将一维数组重新处理成 `定义动态路由（dynamicRoutes）` 的格式
 */
export function formatTwoStageRoutes (arr: any) {
  if (arr.length <= 0) return false
  const newArr: any = []
  const cacheList: Array<string> = []
  arr.forEach((v: any) => {
    if (v.path === '/') {
      newArr.push({ component: v.component, name: v.name, path: v.path, redirect: v.redirect, meta: v.meta, children: [] })
    } else {
      // 判断是否是动态路由（xx/:id/:name），用于 tagsView 等中使用
      // 修复：https://gitee.com/lyt-top/vue-next-admin/issues/I3YX6G
      if (v.path.indexOf('/:') > -1) {
        v.meta.isDynamic = true
        v.meta.isDynamicPath = v.path
      }
      newArr[0].children.push({ ...v })
      // 存 name 值，keep-alive 中 include 使用，实现路由的缓存
      // 路径：/@/layout/routerView/parent.vue
      if (newArr[0].meta.isKeepAlive && v.meta.isKeepAlive) {
        cacheList.push(v.name)
        const stores = useKeepALiveNamesStroe(pinia)
        stores.setCacheKeepAlive(cacheList)
      }
    }
  })
  return newArr
}

/**
 * @description: 路由加载前
 * @param {*} async
 * @param {*} from
 * @param {*} next
 * @return {*}
 */
router.beforeEach(async (to, from, next) => {
  NProgress.configure({ showSpinner: false })
  if (to.meta.title) NProgress.start()
  const token = userInfoStore.userInfo?.accessToken
  if (to.path === '/login' && !token) {
    next()
    NProgress.done()
  } else {
    if (!token) {
      next(`/login?redirect=${to.path}&params=${JSON.stringify(to.query ? to.query : to.params)}`)
      userInfoStore.resetState()
      NProgress.done()
    } else if (token && to.path === '/login') {
      next('/home')
      NProgress.done()
    } else {
      const storesRoutesList = useRoutesList(pinia)
      const { routesList } = storeToRefs(storesRoutesList)
      if (routesList.value.length === 0) {
        if (isRequestRoutes) {
          // 后端控制路由：路由数据初始化，防止刷新时丢失
          await initBackEndControlRoutes()
          // 动态添加路由：防止非首页刷新时跳转回首页的问题
          // 确保 addRoute() 时动态添加的路由已经被完全加载上去
          next({ ...to, replace: true })
        }
      } else {
        next()
      }
    }
  }
})

/**
 * @description: 路由加载后
 * @return {*}
 */
router.afterEach(() => {
  NProgress.done()
})

export default router
