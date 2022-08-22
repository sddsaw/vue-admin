/**
 * @description: 路由权限
 * 1.先定义好全部的路由地址
 * 2.通过用户不同向后台请求不同的用户权限数据
 * 3.对用户数据权限做对比 ：请求数据和全部的路由做对比
 * @return {*}
 */
import router from './index'
import userInfoStore from '@/store/userInfo'
// import { RouteRecordRaw } from 'vue-router'
router.beforeEach((to, from, next) => {
  const store = userInfoStore()
  const token = store.userInfo?.accessToken
  if (!token) {
    // 未登录 页面是否需要登录
    if (to.matched.length > 0 && !to.matched.some(record => record.meta.requiresAuth)) {
      next()
    } else {
      next({ path: '/login' })
    }
  } else {
    // 用户已经登录
  }
})
// TODO 定义后端menu接口返回的数据类型
export interface IUserRouterItem {
  title:string,
  children?:Array<IUserRouterItem>
}
// TODO定义路由children数据类型
export interface childrenType {
  path?: string;
  name?:string;
  children?:Array<childrenType>;
  meta?: {
    icon?: string;
    title?: string;
  };
};
/**
 * @description:
 *方法1:对比路由权限
 *方法2:指定返回的默认路由
 * @param {Array} userRouter:  接口返回的用户权限
 * 不要忘记hide
 * @param { Array} allRouter: 前端定义的所有权限
 * @return {Array} realRoutes: 过滤之后的符合条件的路由
 */

export const recursionRouter = (userRouter:Array<IUserRouterItem>, allRouter :any) => {
  const realRoutes:any = []
  allRouter.forEach((v:any, i:any) => {
    userRouter.forEach((item, index) => {
      if (item.title === v?.meta?.title) {
        if (item.children && item.children.length > 0) {
          v.children = recursionRouter(item.children, v.children)
        }
        realRoutes.push(v)
      }
    })
  })
  return realRoutes
}
