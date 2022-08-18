import { defineStore } from 'pinia'
import { IAppConfig } from './types'

const appConfigStore = defineStore('appConfig', {
  state: ():IAppConfig => ({
    isCollapse: false,
    isRequestRoutes: true
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
    }
  }
})
export default appConfigStore
