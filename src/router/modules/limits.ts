import { RouteRecordRaw } from 'vue-router'
const routerView = import('@/layout/routerView/parent.vue')
/**
 * @description: 权限管理模块
 * @return {*}
 */
const limitsRouter : RouteRecordRaw = {
  path: '/limits',
  name: 'limits',
  component: () => routerView,
  redirect: '/limits/frontEnd',
  meta: {
    title: '权限管理',
    isLink: '',
    isHide: false,
    isAffix: false,
    isIframe: false,
    isKeepAlive: true,
    icon: 'material-symbols:settings-outline-rounded'
  },
  children: [
    {
      path: '/limits/frontEnd',
      name: 'limitsFrontEnd',
      component: () => routerView,
      redirect: '/limits/frontEnd/page',
      meta: {
        title: '前端控制',
        isLink: '',
        isHide: false,
        isAffix: false,
        isIframe: false,
        isKeepAlive: true,
        icon: 'material-symbols:settings-outline-rounded'
      },
      children: [
        {
          path: '/limits/frontEnd/page',
          name: 'limitsFrontEndPage',
          component: () => import('@/views/limits/frontEnd/page/index.vue'),
          meta: {
            title: '页面权限',
            isLink: '',
            isHide: false,
            isAffix: false,
            isIframe: false,
            isKeepAlive: true,
            icon: 'material-symbols:settings-outline-rounded'
          }
        },
        {
          path: '/limits/frontEnd/btn',
          name: 'limitsFrontEndBtn',
          component: () => import('@/views/limits/frontEnd/btn/index.vue'),
          meta: {
            title: '按钮权限',
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
      path: '/limits/backEnd',
      name: 'limitsBackEnd',
      redirect: '/limits/backEnd/page',
      component: () => routerView,
      meta: {
        title: '后端控制',
        isLink: '',
        isHide: false,
        isAffix: false,
        isIframe: false,
        isKeepAlive: true,
        icon: 'material-symbols:settings-outline-rounded'
      },
      children: [
        {
          path: '/limits/backEnd/page',
          name: 'limitsBackEndEndPage',
          component: () => import('@/views/limits/backEnd/page/index.vue'),
          meta: {
            title: '页面权限',
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
  ]
}
export default limitsRouter
