<template>
  <div class="mr-4">
    <el-popover placement="bottom" trigger="click" :width="300">
      <template #reference>
        <el-badge :is-dot="true">
          <AppIcon icon="ph:bell-simple-thin" />
        </el-badge>
      </template>
      123
    </el-popover>
  </div>
</template>

<script lang='ts' setup>
import AppIcon from '@/components/AppIcon/index.vue'
</script>

<style lang='scss' scoped>
</style>
