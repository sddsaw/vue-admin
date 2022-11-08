<template>
  <el-container class="h-full w-full">
    <Aside />
    <el-container class="flex-center">
      <Header />
      <el-scrollbar ref="layoutDefaultsScrollbarRef">
        <Main />
      </el-scrollbar>
    </el-container>
    <!-- <el-backtop target=".layout-backtop .el-scrollbar__wrap" /> -->
  </el-container>
</template>

<script lang='ts' setup>
import { onMounted } from 'vue'
import NextLoading from '@/utils/loading'
import watermark from '@/utils/wartermark'
import appConfigStore from '@/store/appConfig'

import Main from '@/layout/component/main.vue'
import Aside from '@/layout/component/aside.vue'
import Header from '@/layout/component/header.vue'
const createappConfigStore = appConfigStore()

onMounted(async () => {
  NextLoading.done()
  if (createappConfigStore.isWartermark) watermark.set(createappConfigStore.wartermarkText)
})
</script>
<style lang="scss" scoped>
.flex {
  display: flex;
}

.flex-center {
  @extend .flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
}

</style>
