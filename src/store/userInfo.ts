import { defineStore } from 'pinia'
import { ILoginInfo } from '@/api/types/user'
import watermark from '@/utils/wartermark'

const userStore = defineStore('userStore', {
  state: () => ({
    userInfo: null as ILoginInfo | null,
    lastClickTime: 0 // 30分钟无操作自动退出

  }),
  getters: {

  },
  actions: {
    /**
     * @description: 重置state值
     * @return {*}
     */
    resetState () {
      this.$reset()
      watermark.del()
    }

  },
  persist: {
    storage: sessionStorage,
    paths: ['userInfo', 'lastClickTime']
  }
})
export default userStore
