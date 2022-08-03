<template>
  <el-container class="h-full w-full">
    <Aside />
    <el-container class="flex-col flex-center">
      <!-- <el-header>
        Header
      </el-header> -->
      <Header />
      <el-main style="background:green">
        <RouterView />
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang='ts' setup>
import Aside from '@/layout/component/aside.vue'
import Header from '@/layout/component/header.vue'
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
