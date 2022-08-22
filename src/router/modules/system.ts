/**
 * @description: 系统设置模块
 * @return {*}, RouterView
 */
import { RouteRecordRaw } from 'vue-router'
const routerView = import('@/layout/routerView/parent.vue')
const systemRouter: RouteRecordRaw = {
  path: '/system', // TODO 此处也不建议使用/ 如果没有/也是跟着父级的路由，因为父级是/所以是正常的
  name: 'system',
  component: () => routerView,
  redirect: '/system/menu',
  meta: {
    title: '系统设置',
    isLink: '',
    isHide: false,
    isAffix: false,
    isIframe: false,
    isKeepAlive: true,
    icon: 'material-symbols:settings-outline-rounded'
  },
  children: [
    {
      path: '/system/menu', // TODO带斜杠是不关联父级路由，不带是关联
      name: 'systemMenu',
      component: () => import('@/views/system/menu/index.vue'),
      meta: {
        title: '菜单管理',
        isLink: '',
        isHide: false,
        isAffix: false,
        isIframe: false,
        isKeepAlive: true,
        icon: 'material-symbols:settings-outline-rounded'
      }
    },
    {
      path: '/system/role',
      name: 'systemRole',
      component: () => import('@/views/system/role/index.vue'),
      meta: {
        title: '角色管理',
        isLink: '',
        isHide: false,
        isAffix: false,
        isIframe: false,
        isKeepAlive: true,
        icon: 'material-symbols:settings-outline-rounded'
      }
    },
    {
      path: '/system/user',
      name: 'systemUser',
      component: () => import('@/views/system/user/index.vue'),
      meta: {
        title: '用户管理',
        isLink: '',
        isHide: false,
        isAffix: false,
        isIframe: false,
        isKeepAlive: true,
        icon: 'material-symbols:settings-outline-rounded'
      }
    },
    {
      path: '/system/dept',
      name: 'systemDept',
      component: () => import('@/views/system/dept/index.vue'),
      meta: {
        title: '部门管理',
        isLink: '',
        isHide: false,
        isAffix: false,
        isIframe: false,
        isKeepAlive: true,
        icon: 'material-symbols:settings-outline-rounded'
      }
    },
    {
      path: '/system/dic',
      name: 'systemDic',
      component: () => import('@/views/system/dic/index.vue'),
      meta: {
        title: '字典管理',
        isLink: '',
        isHide: false,
        isAffix: false,
        isIframe: false,
        isKeepAlive: true,
        icon: 'material-symbols:settings-outline-rounded'
      }
    }
  ]
}
export default systemRouter
