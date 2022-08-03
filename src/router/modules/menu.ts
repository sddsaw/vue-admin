/**
 * @description: 菜单嵌套模块
 * @return {*}
 */

import { RouterView, RouteRecordRaw } from 'vue-router'

export default {
  path: '/menu',
  name: 'menu',
  component: RouterView,
  redirect: '/menu/menu1',
  meta: {
    title: 'message.router.menu',
    isLink: '',
    isHide: false,
    isKeepAlive: true,
    isAffix: false,
    isIframe: false,
    roles: ['admin', 'common'],
    icon: 'iconfont icon-caidan'
  },
  children: [
    {
      path: '/menu/menu1',
      name: 'menu1',
      component: RouterView,
      redirect: '/menu/menu1/menu11',
      meta: {
        title: 'message.router.menu1',
        isLink: '',
        isHide: false,
        isKeepAlive: true,
        isAffix: false,
        isIframe: false,
        roles: ['admin', 'common'],
        icon: 'iconfont icon-caidan'
      },
      children: [
        {
          path: '/menu/menu1/menu11',
          name: 'menu11',
          component: () => import('@/views/menu/menu1/menu11/index.vue'),
          meta: {
            title: 'message.router.menu11',
            isLink: '',
            isHide: false,
            isKeepAlive: true,
            isAffix: false,
            isIframe: false,
            roles: ['admin', 'common'],
            icon: 'iconfont icon-caidan'
          }
        },
        {
          path: '/menu/menu1/menu12',
          name: 'menu12',
          component: () => import('@/layout/routerView/parent.vue'),
          redirect: '/menu/menu1/menu12/menu121',
          meta: {
            title: 'message.router.menu12',
            isLink: '',
            isHide: false,
            isKeepAlive: true,
            isAffix: false,
            isIframe: false,
            roles: ['admin', 'common'],
            icon: 'iconfont icon-caidan'
          },
          children: [
            {
              path: '/menu/menu1/menu12/menu121',
              name: 'menu121',
              component: () => import('@/views/menu/menu1/menu12/menu121/index.vue'),
              meta: {
                title: 'message.router.menu121',
                isLink: '',
                isHide: false,
                isKeepAlive: true,
                isAffix: false,
                isIframe: false,
                roles: ['admin', 'common'],
                icon: 'iconfont icon-caidan'
              }
            },
            {
              path: '/menu/menu1/menu12/menu122',
              name: 'menu122',
              component: () => import('@/views/menu/menu1/menu12/menu122/index.vue'),
              meta: {
                title: 'message.router.menu122',
                isLink: '',
                isHide: false,
                isKeepAlive: true,
                isAffix: false,
                isIframe: false,
                roles: ['admin', 'common'],
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
            title: 'message.router.menu13',
            isLink: '',
            isHide: false,
            isKeepAlive: true,
            isAffix: false,
            isIframe: false,
            roles: ['admin', 'common'],
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
        title: 'message.router.menu2',
        isLink: '',
        isHide: false,
        isKeepAlive: true,
        isAffix: false,
        isIframe: false,
        roles: ['admin', 'common'],
        icon: 'iconfont icon-caidan'
      }
    }
  ]
} as RouteRecordRaw
// TODO 这种是掩耳盗铃，是把该对象转换成RouteRecordRaw，是没有类型校验的
