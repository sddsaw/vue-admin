/* eslint-disable no-debugger */
import { RouteRecordRaw } from 'vue-router'
// import { storeToRefs } from 'pinia'
import pinia from '@/store/index'
import useUserInfo from '@/store/userInfo'
import { useRequestOldRoutes } from '@/store/requestOldRoutes'
// import { Session } from '/@/utils/storage'
// import { NextLoading } from '/@/utils/loading'
import { dynamicRoutes, notFoundAndNoPower } from '@/router/route'
import { formatTwoStageRoutes, formatFlatteningRoutes, router } from '@/router/newindex'
import { useRoutesList } from '@/store/routesList'
import { useTagsViewRoutes } from '@/store/tagsViewRoutes'
import { menu } from '@/api/user'
console.log(dynamicRoutes)
/**
 * 后端控制路由：初始化方法，防止刷新时路由丢失
 * @method NextLoading 界面 loading 动画开始执行
 * @method useUserInfo().setUserInfos() 触发初始化用户信息 pinia
 * @method useRequestOldRoutes().setRequestOldRoutes() 存储接口原始路由（未处理component），根据需求选择使用
 * @method setAddRoute 添加动态路由
 * @method setFilterMenuAndCacheTagsViewRoutes 设置路由到 vuex routesList 中（已处理成多级嵌套路由）及缓存多级嵌套数组处理后的一维数组
 */
export async function initBackEndControlRoutes () {
  // 界面 loading 动画开始执行
  // if (window.nextLoading === undefined) NextLoading.start()
  // 无 token 停止执行下一步
  const store = useUserInfo()
  const token = store.userInfo?.accessToken
  console.log(token)
  if (!token) return false
  // 触发初始化用户信息 pinia
  // https://gitee.com/lyt-top/vue-next-admin/issues/I5F1HP
  // await useUserInfo().setUserInfos()
  // 获取路由菜单数据
  const res = await menu()
  // 存储接口原始路由（未处理component），根据需求选择使用
  useRequestOldRoutes().setRequestOldRoutes(JSON.parse(JSON.stringify(res)))
  // 添加动态路由
  await setAddRoute()
  // 设置路由到 vuex routesList 中（已处理成多级嵌套路由）及缓存多级嵌套数组处理后的一维数组
  await setFilterMenuAndCacheTagsViewRoutes()
}
/**
 * 设置路由到 vuex routesList 中（已处理成多级嵌套路由）及缓存多级嵌套数组处理后的一维数组
 * @description 用于左侧菜单、横向菜单的显示
 * @description 用于 tagsView、菜单搜索中：未过滤隐藏的(isHide)
 */
export function setFilterMenuAndCacheTagsViewRoutes () {
  const storesRoutesList = useRoutesList(pinia)
  storesRoutesList.setRoutesList(dynamicRoutes[0].children as any)
  setCacheTagsViewRoutes()
}

/**
 * 缓存多级嵌套数组处理后的一维数组
 * @description 用于 tagsView、菜单搜索中：未过滤隐藏的(isHide)
 */
export function setCacheTagsViewRoutes () {
  const storesTagsView = useTagsViewRoutes(pinia)
  storesTagsView.setTagsViewRoutes(formatTwoStageRoutes(formatFlatteningRoutes(dynamicRoutes))[0].children)
}

/**
 * 处理路由格式及添加捕获所有路由或 404 Not found 路由
 * @description 替换 dynamicRoutes（/@/router/route）第一个顶级 children 的路由
 * @returns 返回替换后的路由数组
 */
export function setFilterRouteEnd () {
  const filterRouteEnd: any = formatTwoStageRoutes(formatFlatteningRoutes(dynamicRoutes))
  filterRouteEnd[0].children = [...filterRouteEnd[0].children, ...notFoundAndNoPower]
  console.log(filterRouteEnd)
  return filterRouteEnd
}

/**
 * 添加动态路由
 * @method router.addRoute
 * @description 此处循环为 dynamicRoutes（/@/router/route）第一个顶级 children 的路由一维数组，非多级嵌套
 * @link 参考：https://next.router.vuejs.org/zh/api/#addroute
 */
export async function setAddRoute () {
  await setFilterRouteEnd().forEach((route: RouteRecordRaw) => {
    router.addRoute(route)
  })
}
