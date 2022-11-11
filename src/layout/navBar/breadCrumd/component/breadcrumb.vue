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
            v-for="(item,) in createData.breadcrumbList"
            :key="item.path"
          >
            {{ item.meta.title || item.meta.tagsViewName }}
          </el-breadcrumb-item>
        </TransitionGroup>
      </div>
    </el-breadcrumb>
  </div>
</template>

<script lang='ts' setup>
// computed,
// 定义接口来定义对象的类型
import { reactive, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
// useRouter,
import { useRoute, onBeforeRouteUpdate } from 'vue-router'
import appConfigStore from '@/store/appConfig'
import { ArrowRight, Expand, Fold } from '@element-plus/icons-vue'
import useRoutesList from '@/store/routesList'
const stores = useRoutesList()
const { routesList } = storeToRefs(stores)
interface BreadcrumbState {
  breadcrumbList: Array<any>;
  routeSplit: Array<string>;
  routeSplitFirst: string;
  routeSplitIndex: number;
}
// const router = useRouter()
const route = useRoute()

const store = appConfigStore()
const { isCollapse } = storeToRefs(store)

const createData = reactive<BreadcrumbState>({
  breadcrumbList: [],
  routeSplit: [],
  routeSplitFirst: '',
  routeSplitIndex: 1
})
const setIconHadnel = () => {
  store.SEL_COLLAPSE()
}

/**
 * @description:处理面包屑数据
 * @return {*}
 */
const getBreadcrumbList = (arr: Array<string>) => {
  arr.forEach((item: any) => {
    createData.routeSplit.forEach((v: any, k: number, arrs: any) => {
      if (createData.routeSplitFirst === item.path) {
        createData.routeSplitFirst += `/${arrs[createData.routeSplitIndex]}`
        createData.breadcrumbList.push(item)
        createData.routeSplitIndex++
        if (item.children) getBreadcrumbList(item.children)
      }
    })
  })
}
/**
 * @description: 当前路由字符串切割成数组，并删除第一项空内容
 * @param {*} path
 * @return {*}
 */
const initRouteSplit = (path: string) => {
  createData.breadcrumbList = [routesList.value[0]]
  createData.routeSplit = path.split('/')
  createData.routeSplit.shift()
  createData.routeSplitFirst = `/${createData.routeSplit[0]}`
  createData.routeSplitIndex = 1
  getBreadcrumbList(routesList.value)
  if (route.name === 'home' || (route.name === 'notFound' && createData.breadcrumbList.length > 1)) createData.breadcrumbList.shift()
  if (createData.breadcrumbList.length > 0) createData.breadcrumbList[createData.breadcrumbList.length - 1].meta.tagsViewName = route.meta.title
}
// 页面加载时
onMounted(() => {
  initRouteSplit(route.path)
})
// 路由更新时
onBeforeRouteUpdate((to) => {
  initRouteSplit(to.path)
})
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
