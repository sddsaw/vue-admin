<template>
  <div class="layout-navbars-breadcrumb">
    <el-icon @click="setIconHadnel" v-if="isCollapse">
      <Expand />
    </el-icon>
    <el-icon @click="setIconHadnel" v-else>
      <Fold />
    </el-icon>
    <el-breadcrumb :separator-icon="ArrowRight">
      <div>
        <TransitionGroup tag="ul" name="fade">
          <el-breadcrumb-item
            v-for="(item,index) in routes"
            :key="item.path"
            :class="index !=routes.length -1 ? 'cursor' :''"
            @click="onBreadcrumbClick(item,index != routes.length -1)"
          >
            {{ item.meta.title }}
          </el-breadcrumb-item>
        </TransitionGroup>
      </div>
    </el-breadcrumb>
  </div>
</template>

<script lang='ts' setup>
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import appConfigStore from '@/store/appConfig'
import { ArrowRight, Expand, Fold } from '@element-plus/icons-vue'
const router = useRouter()
const store = appConfigStore()
const { isCollapse } = storeToRefs(store)
const fullPath = router.currentRoute.value.fullPath
const setIconHadnel = () => {
  store.SEL_COLLAPSE()
}
const routes = computed(() => {
  return router.currentRoute.value.matched.filter(item => item.meta.title)
})

/**
 * @description: 此处路由不可重定向
 * @return {* RouteLocationMatched}
 */
const onBreadcrumbClick = (item:any, flag:boolean):void => {
  const { redirect, path } = item
  // TODO 如果当前的路由和redirect路由一致时,禁止跳转
  if (flag && fullPath !== redirect) {
    if (redirect) router.push(redirect)
    else router.push(path)
  }
}
</script>
<style lang="scss" scoped>
.el-icon{
  cursor:pointer;
  margin-right: 15px;
}
.layout-navbars-breadcrumb{
  @apply flex items-center
}
.cursor{
  cursor: pointer;
  &:hover{
    ::v-deep .el-breadcrumb__inner{
      color: #409eff
    }
  }
}
/* 1. 声明过渡效果 */
.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all .5s ease;
}

/* 2. 声明进入和离开的状态 */
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateX(10px);
}

/* 3. 确保离开的项目被移除出了布局流
      以便正确地计算移动时的动画效果。 */
.fade-leave-active {
  display: none;
  position: absolute;
}
</style>
