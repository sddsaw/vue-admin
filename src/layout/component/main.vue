<template>
  <div class="h-full">
    <el-main class="layout-main">
      <el-scrollbar ref="layoutScrollbarRef" class="layout-scrollbar">
        <LayoutParentView :style="{ transition: 'padding 0.3s ease-in-out' }" />
      </el-scrollbar>
    </el-main>
  </div>
</template>

<script lang='ts' setup>
import LayoutParentView from '@/layout/routerView/parent.vue'
</script>
<style lang="scss" scoped>
.layout-main{
  background-color: #f8f8f8;
  padding: 15px;
}
.el-scrollbar {
width: 100%;
}
.layout-scrollbar {
@extend .el-scrollbar;
}
</style>
