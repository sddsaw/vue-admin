import { defineStore } from 'pinia'
import { ITagsViewRoutesState } from './types'
// import { Session } from '/@/utils/storage'

/**
 * TagsView 路由列表
 * @methods setTagsViewRoutes 设置 TagsView 路由列表
 * @methods setCurrenFullscreen 设置开启/关闭全屏时的 boolean 状态
 */
const useTagsViewRoutes = defineStore('tagsViewRoutes', {
  state: (): ITagsViewRoutesState => ({
    tagsViewRoutes: [],
    isTagsViewCurrenFull: false
  }),
  actions: {
    setTagsViewRoutes (data: Array<string>) {
      this.tagsViewRoutes = data
    },
    setCurrenFullscreen (bool: Boolean) {
      this.isTagsViewCurrenFull = bool
    }
  }

})
export default useTagsViewRoutes
