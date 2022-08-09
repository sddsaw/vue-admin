<template>
  <div class="layout-navbars-breadcrumb">
    <el-icon @click="setIconHadnel" v-if="isCollapse">
      <Expand />
    </el-icon>
    <el-icon @click="setIconHadnel" v-else>
      <Fold />
    </el-icon>

    <el-breadcrumb :separator-icon="ArrowRight">
      <el-breadcrumb-item v-for="item in routes" :key="item.path">
        {{ item.meta.title }}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script lang='ts' setup>
import { storeToRefs } from 'pinia'
import { useCounterStore } from '@/store/index'
import { ArrowRight, Expand, Fold } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
import { computed } from 'vue'
const countStore = useCounterStore()
const { isCollapse } = storeToRefs(countStore)
const setIconHadnel = () => {
  countStore.setIncrement()
}
const router = useRouter()
const routes = computed(() => {
  return router.currentRoute.value.matched.filter(item => item.meta.title)
})
console.log(routes)
console.log(router.currentRoute.value.matched)

</script>
<style lang="scss" scoped>
.el-icon{
  cursor:pointer;
  margin-right: 15px;
}
.layout-navbars-breadcrumb{
  @apply flex items-center
}
</style>
