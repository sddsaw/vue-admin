import { MockMethod } from 'vite-plugin-mock'
const userInfo = {
  code: 200,
  success: true,
  data: {
    accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJpc3N1c2VyIiwiYXVkIjoiYXVkaWVuY2UiLCJ0ZW5hbnRfaWQiOiIwMDAwMDAiLCJyb2xlX25hbWUiOiJhZG1pbmlzdHJhdG9yIiwidXNlcl9pZCI6IjExMjM1OTg4MjE3Mzg2NzUyMDEiLCJyb2xlX2lkIjoiMTEyMzU5ODgxNjczODY3NTIwMSIsInVzZXJfbmFtZSI6ImFkbWluIiwidGVsZXBob25lIjoiMjIyMzMzMjIiLCJ0b2tlbl90eXBlIjoiYWNjZXNzX3Rva2VuIiwiZGVwdF9pZCI6IjExMjM1OTg4MTM3Mzg2NzUyMDEiLCJhY2NvdW50IjoiYWRtaW4iLCJjbGllbnRfaWQiOiI1MTczIiwiZXhwIjoxNjYyNTQ1MTQ1LCJuYmYiOjE2NTk5NDUxNDV9.AhVhGokByjUmp6-qjfe6uYUJdhpRLtUB11nvp5e6FSo',
    tokenType: 'bearer',
    userId: '1123598821738675201',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
    userName: '管理员',
    account: 'admin',
    authBtnList: [1, 2, 3],
    expiresIn: 2600000
  },
  msg: '操作成功',
  traceId: '265d2a1722124a9e'
}
const homeRouter = {
  path: '/',
  name: '/',
  meta: {
    title: '首页',
    icon: 'ep:home-filled'
  }

}
const systemRouter = {
  path: '/system',
  name: 'system',
  meta: {
    icon: 'material-symbols:settings-outline-rounded',
    title: '系统设置'
  },
  children: [
    {
      path: '/system/menu',
      name: 'systemMenu',
      meta: {
        icon: 'ep:menu',
        title: '菜单管理'
      }
    },
    {
      path: '/system/role',
      name: 'Role',
      meta: {
        icon: 'carbon:user-role',
        title: '角色管理'
      }
    },
    {
      path: '/system/user',
      name: 'user',
      meta: {
        icon: 'carbon:user-role',
        title: '用户管理'
      }
    },
    {
      path: '/system/dept',
      name: 'dept',
      meta: {
        icon: 'ep:school',
        title: '部门管理'
      }
    },
    {
      path: '/system/dic',
      name: 'dic',
      meta: {
        icon: 'arcticons:dictionaryformids',
        title: '字典管理'
      }
    }
  ]
}
const menuRouter = {
  path: '/menu',
  name: 'menu',
  meta: {
    icon: 'ep:menu',
    title: '菜单嵌套'
  },
  children: [
    {
      path: '/menu/menu1',
      name: 'menu1',
      meta: {
        icon: 'ep:menu',
        title: '菜单1'
      },
      children: [
        {
          path: '/menu/menu1/menu11',
          name: 'menu11',
          meta: {
            icon: 'ep:menu',
            title: '菜单11'
          }

        },
        {
          path: '/menu/menu12',
          name: 'menu12',
          meta: {
            icon: 'ep:menu',
            title: '菜单12'
          },
          children: [
            {
              path: '/menu/menu1/menu12/menu121',
              name: 'menu121',
              meta: {
                icon: 'ep:menu',
                title: '菜单121'
              }
            },
            {
              path: '/menu/menu1/menu12/menu122',
              name: 'menu122',
              meta: {
                icon: 'ep:menu',
                title: '菜单122'
              }
            }
          ]
        },
        {
          path: '/menu/menu1/menu13',
          name: 'menu13',
          meta: {
            icon: 'ep:menu',
            title: '菜单13'
          }
        }
      ]
    },
    {
      path: '/menu/menu2',
      name: 'menu2',
      meta: {
        icon: 'ep:menu',
        title: '菜单2'
      }
    }
  ]
}
const limitsRouter = {
  path: '/limits',
  name: 'limits',
  redirect: '/limits/frontEnd',
  meta: {
    title: '权限管理',
    icon: 'ri:shield-keyhole-line'
  },
  children: [
    {
      path: '/limits/frontEnd',
      name: 'limitsFrontEnd',
      redirect: '/limits/frontEnd/page',
      meta: {
        title: '前端控制',
        icon: 'ri:shield-keyhole-line'
      },
      children: [
        {
          path: '/limits/frontEnd/page',
          name: 'limitsFrontEndPage',
          meta: {
            title: '页面权限',
            icon: 'iconoir:multiple-pages-empty'
          }
        },
        {
          path: '/limits/frontEnd/btn',
          name: 'limitsFrontEndBtn',
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
      meta: {
        title: '后端控制',
        icon: 'ri:shield-keyhole-line'
      },
      children: [
        {
          path: '/limits/backEnd/page',
          name: 'limitsBackEndEndPage',
          meta: {
            title: '页面权限',
            icon: 'iconoir:multiple-pages-empty'
          }
        }
      ]
    }
  ]
}
export default [
  {
    url: '/mock/api/login',
    method: 'post',
    statusCode: 200,
    response: () => {
      return userInfo
    }
  },
  {
    url: '/mock/api/logout',
    method: 'get',
    statusCode: 200,
    response: () => {
      return {
        success: true,
        msg: '操作成功',
        traceId: '265d2a1722124a9e'
      }
    }
  },
  {
    url: '/mock/api/menu',
    method: 'get',
    statusCode: 200,
    response: () => {
      return [
        homeRouter,
        systemRouter,
        limitsRouter,
        menuRouter
      ]
    }
  }

] as MockMethod[]
