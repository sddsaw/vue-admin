import { defineStore } from 'pinia'
import { IAppConfig, IError } from './types'

const appConfigStore = defineStore('appConfig', {
  state: ():IAppConfig => ({
    appTitle: '后台管理',
    isCollapse: false, // 是否开启菜单水平折叠效果
    isRequestRoutes: true, // 是否开启后端控制路由
    isCacheTagsView: false, // 是否开启 TagsView 缓存
    isSortableTagsView: false, // 是否开启 TagsView 拖拽
    isShareTagsView: true, // 是否开启 TagsView 共用
    isWartermark: true, // 是否开启水印
    wartermarkText: '江湖故人', // 水印文案
    errorLog: []
  }),
  getters: {

  },
  actions: {
    /**
     * @description: 设置侧边栏
     * @return {*}
     */
    SEL_COLLAPSE () {
      this.isCollapse = !this.isCollapse
    },
    ADD_ERROELOG (paylod:IError) {
      this.errorLog.push(paylod)
    }
  },
  persist: {
    storage: sessionStorage,
    paths: ['errorLog']
  }
})
export default appConfigStore
