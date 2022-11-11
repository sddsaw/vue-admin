<template>
  <div class="h-full">
    <router-view v-slot="{ Component }">
      <transition name="slide-right" mode="out-in">
        <keep-alive :include="getKeepAliveNames">
          <component :is="Component" />
        </keep-alive>
      </transition>
    </router-view>
  </div>
</template>
<script lang='ts' setup>
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import useKeepALiveNamesStroe from '@/store/keepAliveNames'
const storesKeepAliveNames = useKeepALiveNamesStroe()
const { cachedViews } = storeToRefs(storesKeepAliveNames)

// 获取组件缓存列表(name值)
const getKeepAliveNames = computed(() => {
  return cachedViews.value
})
</script>

<style lang='scss' scoped>
/* 页面切换动画
------------------------------- */
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
will-change: transform;
transition: all 0.3s ease;
}
// slide-right
.slide-right-enter-from {
opacity: 0;
transform: translateX(-20px);
}
.slide-right-leave-to {
opacity: 0;
transform: translateX(20px);
}
// slide-left
.slide-left-enter-from {
@extend .slide-right-leave-to;
}
.slide-left-leave-to {
@extend .slide-right-enter-from;
}

</style>
