<template>
  <div class="user-container">
    <ScreenFull />
    <User />
  </div>
</template>

<script lang='ts' setup>
import User from './User.vue'
import ScreenFull from './ScreenFull.vue'
</script>

<style lang='scss' scoped>
.user-container{
  display: flex;
  align-items: center;
}
</style>
