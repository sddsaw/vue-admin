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

import { storeToRefs } from 'pinia'
import Logo from '@/layout/logo/index.vue'
// import { RouteRecordRaw } from 'vue-router'
import useRoutesList from '@/store/routesList'
import { onBeforeMount, ref, computed } from 'vue'
import appConfigStore from '@/store/appConfig'
import Vertical from '@/layout/navMenu/vertical.vue'
import { childrenType } from '../type'
const menuList = ref<childrenType[]>([])
const createAppConfigStore = appConfigStore()
const isCollapse = computed(() => { return createAppConfigStore.isCollapse })
const stores = useRoutesList()
const { routesList } = storeToRefs(stores)

// 设置/过滤路由（非静态路由/是否显示在菜单中）
onBeforeMount(() => {
  setFilterRoutes()
})
const setFilterRoutes = () => {
  menuList.value = filterRoutesFun(routesList.value)
}
/**
 * @description: 路由过滤递归函数
 * @param {*} arr
 * @return {*}
 */
const filterRoutesFun = (arr: Array<string>) => {
  return arr.filter((item: any) => !item.meta.isHide).map((item: any) => {
    item = Object.assign({}, item)
    if (item.children) item.children = filterRoutesFun(item.children)
    return item
  })
}
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
