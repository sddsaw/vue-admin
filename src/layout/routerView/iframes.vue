<template>
  <div class="layout-view-bg-white flex mt1" :style="{ height: `calc(100vh - ${setIframeHeight}`, border: 'none' }">
    <!-- v-loading="state.iframeLoading" -->
    <iframe :src="state.iframeUrl" frameborder="0" height="100%" width="100%" ref="iframeDom" /><!-- v-show="!state.iframeLoading" -->
  </div>
</template>

<script lang='ts' setup name="LayoutIfameView">
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'
import appConfigStore from '@/store/appConfig'
import useTagsViewRoutes from '@/store/tagsViewRoutes'
import { reactive, onMounted, nextTick, watch, computed } from 'vue'

const appConfig = appConfigStore()
const storesTagsViewRoutes = useTagsViewRoutes()
const { isTagsViewCurrenFull } = storeToRefs(storesTagsViewRoutes)
const route = useRoute()
const state = reactive({
  iframeDom: null as HTMLIFrameElement | null,
  iframeLoading: true,
  iframeUrl: ''
})
const initIframeLoad = () => {
  state.iframeUrl = route.meta.isLink!
  nextTick(() => {
    state.iframeLoading = true
    const iframe = state.iframeDom
    console.log(iframe)
    if (!iframe) return false
    iframe.onload = () => {
      state.iframeLoading = false
    }
  })
}
// 设置 iframe 的高度
const setIframeHeight = computed(() => {
  const { isTagsview } = storeToRefs(appConfig)
  if (isTagsViewCurrenFull.value) {
    return '1px'
  } else {
    if (isTagsview) return '86px'
    else return '51px'
  }
})
// 页面加载时
onMounted(() => {
  initIframeLoad()
})
// 监听路由变化，多个 iframe 时使用
watch(
  () => route.path,
  () => {
    initIframeLoad()
  }
)
</script>

<style lang='scss' scoped>
// @import './index.scss';
</style>
