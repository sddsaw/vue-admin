<template>
  <div class=" layout-aside">
    <el-aside class="h-full">
      <el-scrollbar class="flex-auto">
        <Vertical :menu-list="menuList" />
      </el-scrollbar>
    </el-aside>
  </div>
</template>

<script lang='ts' setup>
import { menu } from '@/api/user'
import { onMounted, ref } from 'vue'
import { RouteRecordRaw } from 'vue-router'
import Vertical from '@/layout/navMenu/vertical.vue'

const menuList = ref<RouteRecordRaw[]>([])

onMounted(async () => {
  menuList.value = await menu()
})

</script>
<style scoped lang="scss">
.el-aside {
  width: auto;
}
.layout-aside{
  background: #304156;
}
</style>
