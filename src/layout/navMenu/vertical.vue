<template>
  <el-menu
    router
    :unique-opened="true"
    :collapse-transition="false"
    background-color="#304156"
    text-color="#fff"
    default-active="2"
    :collapse="isCollapse"
  >
    <el-menu-item index="/">
      <el-icon><HomeFilled /></el-icon>
      <span>首页</span>
    </el-menu-item>
    <el-sub-menu index="1">
      <template #title>
        <el-icon><setting /></el-icon>
        <span>设置</span>
      </template>
      <el-menu-item index="system/menu">
        菜单管理
      </el-menu-item>
      <el-menu-item index="system/role">
        角色管理
      </el-menu-item>
      <el-menu-item index="system/user">
        用户管理
      </el-menu-item>
      <el-menu-item index="system/dept">
        部门管理
      </el-menu-item>
      <el-menu-item index="system/dic">
        字典管理
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>
<script lang="ts" setup>
import { useCounterStore } from '@/store/index'
import { storeToRefs } from 'pinia'
const countStore = useCounterStore()
const { isCollapse } = storeToRefs(countStore)
// import SubItem from '@/layout/navMenu/subItem.vue'
</script>
<style>
.el-menu{
  border-right: none;
}
.el-menu:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
