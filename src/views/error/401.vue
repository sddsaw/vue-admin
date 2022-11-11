<template>
  <div class="error layout-view-bg-white" :style="{ height: `calc(100vh - ${initTagViewHeight}` }">
    <div class="error-flex">
      <div class="left">
        <div class="left-item">
          <div class="left-item-animation left-item-num">
            401
          </div>
          <div class="left-item-animation left-item-title">
            您未被授权，没有操作权限~
          </div>
        </div>
      </div>
      <div class="right">
        <img
          src="https://img-blog.csdnimg.cn/3333f265772a4fa89287993500ecbf96.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAbHl0LXRvcA==,size_16,color_FFFFFF,t_70,g_se,x_16"
        >
      </div>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { computed } from 'vue'
import appConfigStore from '@/store/appConfig'
import { storeToRefs } from 'pinia'
import useTagsViewRoutes from '@/store/tagsViewRoutes'

const appConfig = appConfigStore()
const storesTagsViewRoutes = useTagsViewRoutes()
// 设置主内容的高度
const initTagViewHeight = computed(() => {
  const { isTagsview } = storeToRefs(appConfig)
  const { isTagsViewCurrenFull } = storeToRefs(storesTagsViewRoutes)

  if (isTagsViewCurrenFull.value) {
    return '30px'
  } else {
    if (isTagsview) return '114px'
    else return '80px'
  }
})
</script>

<style lang='scss' scoped>
</style>
