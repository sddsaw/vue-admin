<template>
  <div class="h-full">
    <el-main class="layout-main">
      <el-scrollbar ref="layoutScrollbarRef" class="layout-scrollbar">
        <LayoutParentView :style="{ padding: (currentRouteMeta.isLink && currentRouteMeta.isIframe) ? '0' :'15px',transition: 'padding 0.3s ease-in-out' }" />
        <!--
           (currentRouteMeta.isLink && currentRouteMeta.isIframe) ? '0' :
         -->
      </el-scrollbar>
    </el-main>
  </div>
</template>

<script lang='ts' setup>
import LayoutParentView from '@/layout/routerView/parent.vue'
import { reactive, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const currentRouteMeta = reactive({
  isLink: '',
  isIframe: false
})
// 初始化获取当前路由 meta，用于设置 iframes padding
const initGetMeta = () => {
  currentRouteMeta.isLink = route.meta.isLink!
  currentRouteMeta.isIframe = route.meta.isIframe!
}
onMounted(() => {
  initGetMeta()
})
// 监听路由变化
watch(
  () => route.path,
  () => {
    initGetMeta()
  }
)
</script>
<style lang="scss" scoped>
.layout-main{
  background-color: #f8f8f8;
  // padding: 15px;
  padding: 0 !important;
  overflow: hidden;
  width: 100%;
}
.el-scrollbar {
width: 100%;
}
.layout-scrollbar {
@extend .el-scrollbar;
}
</style>
