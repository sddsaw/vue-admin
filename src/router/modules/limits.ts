import { RouteRecordRaw } from 'vue-router'

/**
 * @description: 权限管理模块
 * @return {*}
 */
const limitsRouter : RouteRecordRaw = {
  path: '/limits',
  name: 'limits',
  // component: RouterView,
  component: () => import('@/layout/routerView/parent.vue'),

  redirect: '/limits/frontEnd',
  meta: {
    title: '权限管理',
    icon: 'ri:shield-keyhole-line'
  },
  children: [
    {
      path: '/limits/frontEnd',
      name: 'limitsFrontEnd',
      // component: RouterView,
      component: () => import('@/layout/routerView/parent.vue'),
      redirect: '/limits/frontEnd/page',
      meta: {
        title: '前端控制',
        icon: 'ri:shield-keyhole-line'
      },
      children: [
        {
          path: '/limits/frontEnd/page',
          name: 'limitsFrontEndPage',
          component: () => import('@/views/limits/frontEnd/page/index.vue'),
          meta: {
            title: '页面权限',
            icon: 'iconoir:multiple-pages-empty'
          }
        },
        {
          path: '/limits/frontEnd/btn',
          name: 'limitsFrontEndBtn',
          component: () => import('@/views/limits/frontEnd/btn/index.vue'),
          meta: {
            title: '按钮权限',
            icon: 'mdi:button-pointer'
          }
        }
      ]
    },
    {
      path: '/limits/backEnd',
      name: 'limitsBackEnd',
      component: () => import('@/layout/routerView/parent.vue'),
      meta: {
        title: '后端控制',
        icon: 'ri:shield-keyhole-line'
      },
      children: [
        {
          path: '/limits/backEnd/page',
          name: 'limitsBackEndEndPage',
          component: () => import('@/views/limits/backEnd/page/index.vue'),
          meta: {
            title: '页面权限',
            icon: 'iconoir:multiple-pages-empty'
          }
        }
      ]
    }
  ]
}
export default limitsRouter
