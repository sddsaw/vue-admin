import { RouteRecordRaw } from 'vue-router'
import limitsRouter from './modules/limits'
import menuRouter from './modules/menu'
import systemRouter from './modules/system'
/**
 * 路由meta对象参数说明
 * meta: {
 *      title:          菜单栏及 tagsView栏
 *      isLink：        是否超链接菜单，开启外链条件，`1、isLink: 链接地址不为空`
 *      isHide：        是否隐藏此路由
 *      isKeepAlive：   是否缓存组件状态
 *      isAffix：       是否固定在 tagsView 栏上
 *      isIframe：      是否内嵌窗口，开启条件，`1、isIframe:true 2、isLink：链接地址不为空`
 *      icon：          菜单、tagsView 图标，阿里：加 `iconfont xxx`，fontawesome：加 `fa xxx`,iconify：加 `ic xxx`
 * }
 */

/**
 * @description 定义动态路由
 * @returns
 */
export const dynamicRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: '/',
    component: () => import('@/layout/index.vue'),
    redirect: '/home',
    meta: {
      requiresAuth: true,
      isKeepAlive: true
    },
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '首页',
          isLink: '',
          isHide: false,
          isAffix: true,
          isIframe: false,
          isKeepAlive: true,
          icon: 'material-symbols:settings-outline-rounded'
        }
      },
      limitsRouter,
      menuRouter,
      systemRouter
    ]
  }
]

/**
 * 定义静态路由（默认路由）
 * @description 此路由不要动，前端添加路由的话，请在 `dynamicRoutes 数组` 中添加
 * @returns
 */
export const staticRoutes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: '登录'
    }
  }
]

/**
 * @description: 定义404、401界面
 * @return {*}
 */
export const notFoundAndNoPower: Array<RouteRecordRaw> = [
  {
    path: '/401',
    name: 'noPower',
    component: () => import('@/views/error/401.vue'),
    meta: {
      title: '401',
      isHide: true
    }
  },
  {
    path: '/:path(.*)*',
    name: 'notFound',
    component: () => import('@/views/error/404.vue'),
    meta: {
      title: '404',
      isHide: true
    }
  }
]
