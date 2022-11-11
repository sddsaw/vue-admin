import { MockMethod } from 'vite-plugin-mock'
const adminMenu = {
  code: 200,
  success: true,
  data: [
    {
      path: '/home',
      name: 'home',
      component: 'home/index',
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
    {
      path: '/system',
      name: 'system',
      component: 'layout/routerView/parent',
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
          path: '/system/menu',
          name: 'systemMenu',
          component: 'system/menu/index',
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
          path: '/system/user',
          name: 'systemUser',
          component: 'system/user/index',
          meta: {
            title: '用户管理',
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
      path: '/limits',
      name: 'limits',
      component: 'layout/routerView/parent',
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
          path: '/limits/backEnd',
          name: 'limitsBackEnd',
          component: 'layout/routerView/parent',
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
              component: 'limits/backEnd/page/index',
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
    },
    {
      path: '/menu',
      name: 'menu',
      component: 'layout/routerView/parent',
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
          component: 'layout/routerView/parent',
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
              component: 'menu/menu1/menu11/index',
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
              component: 'layout/routerView/parent',
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
                  component: 'menu/menu1/menu12/menu121/index',
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
                  component: 'menu/menu1/menu12/menu122/index',
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
              component: 'menu/menu1/menu13/index',
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
          component: 'menu/menu2/index',
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
  ],
  msg: '操作成功',
  traceId: '265d2a1722124a9e'
}
export default [
  {
    url: '/mock/api/getAdminMenu',
    method: 'get',
    statusCode: 200,
    response: () => {
      return adminMenu
    }
  }
] as MockMethod[]
