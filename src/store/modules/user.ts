import { defineStore } from 'pinia'
import { ILoginInfo } from '@/api/types/user'

const userStore = defineStore('userStore', {
  state: () => ({
    userInfo: null as ILoginInfo | null
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
    }

  },
  persist: {
    storage: sessionStorage,
    paths: ['userInfo']
  }
})
export default userStore
