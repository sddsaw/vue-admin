import { defineStore } from 'pinia'
import { ILoginInfo } from '@/api/types/user'
import watermark from '@/utils/wartermark'

const userStore = defineStore('userStore', {
  state: () => ({
    userInfo: {
      accessToken: '',
      tokenType: '',
      userId: '',
      avatar: '',
      userName: '',
      account: '',
      expiresIn: 0, // token有效期
      authBtnList: []// 按钮权限集
    } as ILoginInfo,
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
