<template>
  <div class="h-full">
    <el-aside class="layout-aside " :class="isCollapse ?'layout-aside-pc-64':'layout-aside-pc-220'">
      <Logo />
      <el-scrollbar>
        <Vertical :menu-list="menuList" />
      </el-scrollbar>
    </el-aside>
  </div>
</template>

<script lang='ts' setup>
import { menu } from '@/api/user'
import Logo from '@/layout/logo/index.vue'
import { RouteRecordRaw } from 'vue-router'
import { onMounted, ref, computed } from 'vue'
import appConfigStore from '@/store/appConfig'
import Vertical from '@/layout/navMenu/vertical.vue'
const menuList = ref<RouteRecordRaw[]>([])
const createAppConfigStore = appConfigStore()
onMounted(async () => { menuList.value = await menu() })
const isCollapse = computed(() => { return createAppConfigStore.isCollapse })
</script>

<style scoped lang="scss">
.layout-aside{
  background: #304156;
  box-shadow: 2px 0 6px rgb(0 21 41 / 1%);
  height: inherit;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  overflow-x: hidden !important;
  .el-scrollbar__view {
    overflow: hidden;
  }
}
.layout-aside-pc-64{
  transition: width 0.3s ease;
  width: 64px !important;
}
.layout-aside-pc-220{
  transition: width 0.3s ease;
  width: 220px !important;
}
</style>
