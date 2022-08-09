<template>
  <div class="user-container">
    <UserNews />
    <ScanCode />
    <User />
  </div>
</template>

<script lang='ts' setup>
import User from './User.vue'
import UserNews from './UserNews.vue'
import ScanCode from './ScreenFull.vue'
</script>

<style lang='scss' scoped>
.user-container{
  display: flex;
  align-items: center;
}
</style>
