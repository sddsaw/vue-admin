<template>
  <div class="h-full">
    <router-view v-slot="{ Component }">
      <transition name="slide-right" mode="out-in">
        <keep-alive>
          <component :is="Component" class="w100" />
        </keep-alive>
      </transition>
    </router-view>
  </div>
</template>

<script lang='ts' setup>
</script>

<style lang='scss' scoped>
</style>
