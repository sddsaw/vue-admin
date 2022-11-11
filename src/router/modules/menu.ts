/**
 * @description: 菜单嵌套模块
 * @return {*}
 */

import { RouteRecordRaw } from 'vue-router'
const routerView = import('@/layout/routerView/parent.vue')
const menuRouter: RouteRecordRaw = {
  path: '/menu',
  name: 'menu',
  component: () => routerView,
  redirect: '/menu/menu1',
  meta: {
    title: '菜单嵌套',
    isLink: '',
    isHide: false,
    isAffix: false,
    isIframe: false,
    isKeepAlive: true,
    icon: 'material-symbols:settings-outline-rounded'
  },
  children: [
    {
      path: '/menu/menu1',
      name: 'menu1',
      component: () => import('@/layout/routerView/parent.vue'),
      redirect: '/menu/menu1/menu11',
      meta: {
        title: '菜单1',
        isLink: '',
        isHide: false,
        isAffix: false,
        isIframe: false,
        isKeepAlive: true,
        icon: 'material-symbols:settings-outline-rounded'
      },
      children: [
        {
          path: '/menu/menu1/menu11',
          name: 'menu11',
          component: () => import('@/views/menu/menu1/menu11/index.vue'),
          meta: {
            title: '菜单11',
            isLink: '',
            isHide: false,
            isAffix: false,
            isIframe: false,
            isKeepAlive: true,
            icon: 'material-symbols:settings-outline-rounded'
          }
        },
        {
          path: '/menu/menu1/menu12',
          name: 'menu12',
          component: () => import('@/layout/routerView/parent.vue'),
          redirect: '/menu/menu1/menu12/menu121',
          meta: {
            title: '菜单12',
            isLink: '',
            isHide: false,
            isAffix: false,
            isIframe: false,
            isKeepAlive: true,
            icon: 'material-symbols:settings-outline-rounded'
          },
          children: [
            {
              path: '/menu/menu1/menu12/menu121',
              name: 'menu121',
              component: () => import('@/views/menu/menu1/menu12/menu121/index.vue'),
              meta: {
                title: '菜单121',
                isLink: '',
                isHide: false,
                isAffix: false,
                isIframe: false,
                isKeepAlive: true,
                icon: 'material-symbols:settings-outline-rounded'
              }
            },
            {
              path: '/menu/menu1/menu12/menu122',
              name: 'menu122',
              component: () => import('@/views/menu/menu1/menu12/menu122/index.vue'),
              meta: {
                title: '菜单122',
                isLink: '',
                isHide: false,
                isAffix: false,
                isIframe: false,
                isKeepAlive: true,
                icon: 'material-symbols:settings-outline-rounded'
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
            isLink: '',
            isHide: false,
            isAffix: false,
            isIframe: false,
            isKeepAlive: true,
            icon: 'material-symbols:settings-outline-rounded'
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
export default menuRouter
