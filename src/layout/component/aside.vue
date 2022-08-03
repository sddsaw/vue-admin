<template>
  <div class="h-full layout-aside">
    <el-aside>
      <el-scrollbar class="flex-auto" ref="layoutAsideScrollbarRef">
        <Vertical />
      </el-scrollbar>
    </el-aside>
  </div>
</template>

<script lang='ts' setup>
import Vertical from '@/layout/navMenu/vertical.vue'
</script>
<style scoped lang="scss">

.el-aside {
  width: auto;
}

.layout-aside{
  background: #304156;

}
</style>
