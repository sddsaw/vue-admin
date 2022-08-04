/**
 * @description: 系统设置模块
 * @return {*}
 */
import { RouteRecordRaw, RouterView } from 'vue-router'
const systemRouter: RouteRecordRaw = {
  path: '/system', // TODO 此处也不建议使用/ 如果没有/也是跟着父级的路由，因为父级是/所以是正常的
  name: 'system',
  component: RouterView,
  meta: {
    title: '设置'
  },
  children: [
    {
      path: 'menu', // TODO带斜杠是不关联父级路由，不带是关联
      name: 'menu',
      component: () => import('@/views/system/menu/index.vue'),
      meta: {
        title: '菜单管理'
      }
    },
    {
      path: 'role',
      name: 'role',
      component: () => import('@/views/system/role/index.vue'),
      meta: {
        title: '角色管理'
      }
    },
    {
      path: 'user',
      name: 'user',
      component: () => import('@/views/system/user/index.vue'),
      meta: {
        title: '用户管理'
      }
    },
    {
      path: 'dept',
      name: 'dept',
      component: () => import('@/views/system/dept/index.vue'),
      meta: {
        title: '部门管理'
      }
    },
    {
      path: 'dic',
      name: 'dic',
      component: () => import('@/views/system/dic/index.vue'),
      meta: {
        title: '字典管理'
      }
    }
  ]
}

export default systemRouter
