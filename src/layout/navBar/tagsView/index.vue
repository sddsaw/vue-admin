
<template>
  <div class="layout-navbars-tagsview">
    <el-scrollbar ref="scrollbarRef" @wheel.prevent="onHandleScroll" />
  </div>
</template>

<script lang='ts' setup>
// import emitter from '@/utils/mitt'
import { getCurrentInstance } from 'vue'
const { proxy } = getCurrentInstance() as any
console.log(proxy)
/**
 * @description: 鼠标滚轮滚动
 * @param {*} e
 * @return {*}
 */
const onHandleScroll = (e: any) => {
  proxy.$refs.scrollbarRef.$refs.wrap$.scrollLeft += e.wheelDelta / 4
}
</script>
<style>
.layout-navbars-tagsview{
  background-color: #ffffff;
  border-bottom: 1px solid #f1f2f3;
  position: relative;
  z-index: 4;
  height: 35px;
}

</style>
