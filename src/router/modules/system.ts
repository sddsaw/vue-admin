/**
 * @description: 系统设置模块
 * @return {*}
 */
import { RouteRecordRaw, RouterView } from 'vue-router'
const systemRouter: RouteRecordRaw = {
  path: '/system', // TODO 此处也不建议使用/ 如果没有/也是跟着父级的路由，因为父级是/所以是正常的
  name: 'system',
  component: RouterView,
  redirect: '/system/menu',
  meta: {
    icon: 'material-symbols:settings-outline-rounded',
    title: '系统设置'
  },
  children: [
    {
      path: '/system/menu', // TODO带斜杠是不关联父级路由，不带是关联
      name: 'systemMenu',
      component: () => import('@/views/system/menu/index.vue'),
      meta: {
        title: '菜单管理'
      }
    },
    {
      path: '/system/role',
      name: 'role',
      component: () => import('@/views/system/role/index.vue'),
      meta: {
        title: '角色管理'
      }
    },
    {
      path: '/system/user',
      name: 'user',
      component: () => import('@/views/system/user/index.vue'),
      meta: {
        title: '用户管理'
      }
    },
    {
      path: '/system/dept',
      name: 'dept',
      component: () => import('@/views/system/dept/index.vue'),
      meta: {
        title: '部门管理'
      }
    },
    {
      path: '/system/dic',
      name: 'dic',
      component: () => import('@/views/system/dic/index.vue'),
      meta: {
        title: '字典管理'
      }
    }
  ]
}

export default systemRouter
