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

    <el-menu-item index="4">
      <el-icon><setting /></el-icon>
      <span>设置</span>
    </el-menu-item>
  </el-menu>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

// import SubItem from '@/layout/navMenu/subItem.vue'
const isCollapse = ref(true)
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
