/**
 * @description: 系统设置模块
 * @return {*}
 */
import { RouteRecordRaw, RouterView } from 'vue-router'
const systemRouter: RouteRecordRaw = {
  path: 'system', // TODO 此处也不建议使用/ 如果没有/也是跟着父级的路由，因为父级是/所以是正常的
  name: 'system',
  component: RouterView,
  redirect: '/system/menu',
  meta: {
    title: 'message.router.system',
    isLink: '',
    isHide: false,
    isKeepAlive: true,
    isAffix: false,
    isIframe: false,
    roles: ['admin'],
    icon: 'iconfont icon-xitongshezhi'
  },
  children: [
    {
      path: '/system/menu', // TODO带斜杠是不关联父级路由，不带是关联
      name: '/system/menu',
      component: () => import('@/views/system/menu/index.vue')
    },
    {
      path: 'role',
      name: 'role',
      component: () => import('@/views/system/role/index.vue')
    },
    {
      path: 'user',
      name: 'user',
      component: () => import('@/views/system/user/index.vue')
    },
    {
      path: 'dept',
      name: 'dept',
      component: () => import('@/views/system/dept/index.vue')
    },
    {
      path: 'dic',
      name: 'dic',
      component: () => import('@/views/system/dic/index.vue')
    }
  ]
}

export default systemRouter
