/**
 * @description: 菜单嵌套模块
 * @return {*}
 */

import { RouteRecordRaw } from 'vue-router'

const menuRouter: RouteRecordRaw = {
  path: '/menu',
  name: 'menu',
  // component: RouterView,
  component: () => import('@/layout/routerView/parent.vue'),
  redirect: '/menu/menu1/menu11',
  meta: {
    title: '菜单嵌套',
    icon: 'ep:menu'
  },
  children: [
    {
      path: '/menu/menu1',
      name: 'menu1',
      // component: RouterView,
      component: () => import('@/layout/routerView/parent.vue'),
      redirect: '/menu/menu1/menu11',
      meta: {
        title: '菜单1',
        icon: 'ep:menu'
      },
      children: [
        {
          path: '/menu/menu1/menu11',
          name: 'menu11',
          component: () => import('@/views/menu/menu1/menu11/index.vue'),
          meta: {
            title: '菜单11',
            icon: 'iconfont icon-caidan'
          }
        },
        {
          path: '/menu/menu1/menu12',
          name: 'menu12',
          component: () => import('@/layout/routerView/parent.vue'),
          meta: {
            title: '菜单12',
            icon: 'iconfont icon-caidan'
          },
          children: [
            {
              path: '/menu/menu1/menu12/menu121',
              name: 'menu121',
              component: () => import('@/views/menu/menu1/menu12/menu121/index.vue'),
              meta: {
                title: '菜单121',
                icon: 'iconfont icon-caidan'
              }
            },
            {
              path: '/menu/menu1/menu12/menu122',
              name: 'menu122',
              component: () => import('@/views/menu/menu1/menu12/menu122/index.vue'),
              meta: {
                title: '菜单122',
                icon: 'iconfont icon-caidan'
              }
            }
          ]
        },
        {
          path: '/menu/menu1/menu13',
          name: 'menu13',
          component: () => import('@/views/menu/menu1/menu13/index.vue'),
          meta: {
            title: '菜单13',
            icon: 'iconfont icon-caidan'
          }
        }
      ]
    },
    {
      path: '/menu/menu2',
      name: 'menu2',
      component: () => import('@/views/menu/menu2/index.vue'),
      meta: {
        title: '菜单2',
        icon: 'iconfont icon-caidan'
      }
    }
  ]
}
export default menuRouter
