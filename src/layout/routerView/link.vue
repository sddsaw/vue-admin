<template>
  <div class="layout-view-bg-white flex layout-view-link" :style="{ height: `calc(100vh - ${setLinkHeight}` }">
    <a :href="currentRouteMeta?.isLink" target="_blank" rel="opener" class="flex-margin">
      {{ currentRouteMeta.title }}：{{ currentRouteMeta.isLink }}
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import appConfigStore from '@/store/appConfig'
const appConfig = appConfigStore()
const { isTagsview } = storeToRefs(appConfig)

export default defineComponent({
  name: 'LayoutLinkView',
  setup () {
    // const storesThemeConfig = useThemeConfig();
    // const { themeConfig } = storeToRefs(storesThemeConfig);
    const route = useRoute()
    const currentRouteMeta = ref()
    // 设置 link 的高度
    const setLinkHeight = computed(() => {
      if (isTagsview) return '115px'
      else return '80px'
    })
    // 监听路由的变化，设置内容
    watch(
      () => route.path,
      () => { currentRouteMeta.value = route.meta },
      {
        immediate: true
      }
    )
    return {
      setLinkHeight,
      currentRouteMeta
    }
  }
})
</script>
