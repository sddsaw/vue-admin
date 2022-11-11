
<template>
  <div class="layout-navbars-tagsview">
    <el-scrollbar ref="scrollbarRef" @wheel.prevent="onHandleScroll">
      <ul class="layout-navbars-tagsview-ul tags-style-five" ref="tagsUlRef">
        <li
          v-for="(item, index) in state.tagsViewList"
          :key="index"
          class="layout-navbars-tagsview-ul-li"
          :data-url="item.url"
          :class="{ 'is-active': isActive(item) }"
          @contextmenu.prevent="onContextmenu(item, $event)"
          @click="onTagsClick(item, index)"
          :ref="(el) => { if (el) tagsRefs[index] = el }"
        >
          <span>{{ item.meta.title }}</span>
          <app-icon
            icon="ep:close"
            class="layout-navbars-tagsview-ul-li-icon layout-icon-three"
            v-if="!item.meta.isAffix"
            @click.stop="closeCurrentTagsView(isShareTagsView ? item.path : item.url)"
          />
        </li>
      </ul>
    </el-scrollbar>
  </div>
</template>

<script lang='ts' setup>
// import emitter from '@/utils/mitt'
import { TagsViewState, RouteParams } from './type'
import { getCurrentInstance, ref, reactive, onMounted, onBeforeMount, nextTick } from 'vue'
import { useRoute, useRouter, onBeforeRouteUpdate } from 'vue-router'
import useTagsViewRoutes from '@/store/tagsViewRoutes'
import appConfig from '@/store/appConfig'
import useKeepALiveNames from '@/store/keepAliveNames'
import { isObjectValueEqual } from '@/utils/arrayOperation'
import AppIcon from '@/components/AppIcon/index.vue'
import { storeToRefs } from 'pinia'
import { Session } from '@/utils/storage'
const { proxy } = getCurrentInstance() as any
const tagsRefs = ref<any[]>([])
const storesAppConfig = appConfig()
const { isCacheTagsView, isShareTagsView } = storeToRefs(storesAppConfig)
const storesTagsViewRoutes = useTagsViewRoutes()
const storesKeepALiveNames = useKeepALiveNames()
const { tagsViewRoutes } = storeToRefs(storesTagsViewRoutes)

const route = useRoute()
const router = useRouter()
const state = reactive<TagsViewState>({
  routeActive: '',
  routePath: route.path,
  dropdown: { x: '', y: '' },
  sortable: '',
  tagsRefsIndex: 0,
  tagsViewList: [],
  tagsViewRoutesList: []
})
// 路由更新时（组件内生命钩子）
onBeforeRouteUpdate(async (to) => {
  state.routeActive = setTagsViewHighlight(to)
  state.routePath = to.meta.isDynamic ? to.meta.isDynamicPath : to.path
  await addTagsView(to.path, to)
  getTagsRefsIndex(isShareTagsView.value ? state.routePath : state.routeActive)
})
/**
 * @description: 关闭标签
 * @return {*}
 */
const closeCurrentTagsView = (path: string) => {
  // eslint-disable-next-line array-callback-return
  state.tagsViewList.map((v: any, k: number, arr: any) => {
    if (!v.meta.isAffix) {
      if (isShareTagsView.value ? v.path === path : v.url === path) {
        storesKeepALiveNames.delCachedView(v)
        state.tagsViewList.splice(k, 1)
        setTimeout(() => {
          if (state.tagsViewList.length === k && isShareTagsView.value ? state.routePath === path : state.routeActive === path) {
            // 最后一个且高亮时
            if (arr[arr.length - 1].meta.isDynamic) {
              // 动态路由（xxx/:id/:name"）
              if (k !== arr.length) router.push({ name: arr[k].name, params: arr[k].params })
              else router.push({ name: arr[arr.length - 1].name, params: arr[arr.length - 1].params })
            } else {
              // 普通路由
              if (k !== arr.length) router.push({ path: arr[k].path, query: arr[k].query })
              else router.push({ path: arr[arr.length - 1].path, query: arr[arr.length - 1].query })
            }
          } else {
            // 非最后一个且高亮时，跳转到下一个
            if (state.tagsViewList.length !== k && isShareTagsView.value ? state.routePath === path : state.routeActive === path) {
              if (arr[k].meta.isDynamic) {
                // 动态路由（xxx/:id/:name"）
                router.push({ name: arr[k].name, params: arr[k].params })
              } else {
                // 普通路由
                router.push({ path: arr[k].path, query: arr[k].query })
              }
            }
          }
        }, 0)
      }
    }
  })
  addBrowserSetSession(state.tagsViewList)
}
// 获取 tagsView 的下标：用于处理 tagsView 点击时的横向滚动
const getTagsRefsIndex = (path: string | unknown) => {
  nextTick(async () => {
    // await 使用该写法，防止拿取不到 tagsViewList 列表数据不完整
    const tagsViewList = state.tagsViewList
    state.tagsRefsIndex = tagsViewList.findIndex((v: any) => {
      if (isShareTagsView.value) {
        return v.path === path
      } else {
        return v.url === path
      }
    })
    // // 添加初始化横向滚动条移动到对应位置
    // tagsViewmoveToCurrentTag()
  })
}
// 处理可开启多标签详情，单标签详情（动态路由（xxx/:id/:name"），普通路由处理）
const solveAddTagsView = async (path: string, to?: any) => {
  const isDynamicPath = to.meta.isDynamic ? to.meta.isDynamicPath : path
  const current = state.tagsViewList.filter(
    (v: any) => v.path === isDynamicPath && isObjectValueEqual(
      to.meta.isDynamic ? (v.params ? v.params : null) : v.query ? v.query : null,
      to.meta.isDynamic ? (to?.params ? to?.params : null) : to?.query ? to?.query : null)
  )
  if (current.length <= 0) {
    // 防止：Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead.
    const findItem = state.tagsViewRoutesList.find((v: any) => v.path === isDynamicPath)
    if (!findItem) return false
    if (findItem.meta.isAffix) return false
    if (findItem.meta.isLink && !findItem.meta.isIframe) return false
    to.meta.isDynamic ? (findItem.params = to.params) : (findItem.query = to.query)
    findItem.url = setTagsViewHighlight(findItem)
    state.tagsViewList.push({ ...findItem })
    await storesKeepALiveNames.addCachedView(findItem)
    addBrowserSetSession(state.tagsViewList)
  }
}

onMounted(() => {
  // 初始化 pinia 中的 tagsViewRoutes 列表
  getTagsViewRoutes()
})
const getTagsViewRoutes = async () => {
  state.routeActive = await setTagsViewHighlight(route)

  state.routePath = (await route.meta.isDynamic) ? route.meta.isDynamicPath : route.path

  state.tagsViewList = []
  state.tagsViewRoutesList = tagsViewRoutes.value

  initTagsView()
}

const setTagsViewHighlight = (v: any) => {
  const params = v.query && Object.keys(v.query).length > 0 ? v.query : v.params
  if (!params || Object.keys(params).length <= 0) return v.path
  let path = ''
  for (const i in params) {
    path += params[i]
  }
  // 判断是否是动态路由（xxx/:id/:name"）
  return `${v.meta.isDynamic ? v.meta.isDynamicPath : v.path}-${path}`
}

/**
 * @description: vuex 中获取路由信息：如果是设置了固定的（isAffix），进行初始化显示
 * @return {*}
 */
const initTagsView = async () => {
  if (Session.get('tagsViewList') && isCacheTagsView.value) {
    state.tagsViewList = await Session.get('tagsViewList')
  } else {
    // TODO map改为foreach
    // eslint-disable-next-line array-callback-return
    await state.tagsViewRoutesList.map((v: any) => {
      if (v.meta.isAffix && !v.meta.isHide) {
        v.url = setTagsViewHighlight(v)
        state.tagsViewList.push({ ...v })
        storesKeepALiveNames.addCachedView(v)
      }
    })
    addTagsView(route.path, route)
  }
  // 初始化当前元素(li)的下标
  getTagsRefsIndex(isShareTagsView.value ? state.routePath : state.routeActive)
}
// 1、添加 tagsView：未设置隐藏（isHide）也添加到在 tagsView 中（可开启多标签详情，单标签详情）
const addTagsView = (path: string, to?: any) => {
  // 防止拿取不到路由信息
  nextTick(async () => {
    // 修复：https://gitee.com/lyt-top/vue-next-admin/issues/I3YX6G
    let item: any = ''
    if (to && to.meta.isDynamic) {
      // 动态路由（xxx/:id/:name"）：参数不同，开启多个 tagsview
      if (!isShareTagsView.value) await solveAddTagsView(path, to)
      else singleAddTagsView(path, to)
      if (state.tagsViewList.some((v: any) => v.path === to.meta.isDynamicPath)) return false
      item = state.tagsViewRoutesList.find((v: any) => v.path === to.meta.isDynamicPath)
    } else {
      // 普通路由：参数不同，开启多个 tagsview
      if (!isShareTagsView.value) await solveAddTagsView(path, to)
      else singleAddTagsView(path, to)
      if (state.tagsViewList.some((v: any) => v.path === path)) return false
      item = state.tagsViewRoutesList.find((v: any) => v.path === path)
    }
    if (!item) return false
    if (item.meta.isLink && !item.meta.isIframe) return false
    if (to && to.meta.isDynamic) item.params = to?.params ? to?.params : route.params
    else item.query = to?.query ? to?.query : route.query
    item.url = setTagsViewHighlight(item)
    await storesKeepALiveNames.addCachedView(item)
    state.tagsViewList.push({ ...item })
    addBrowserSetSession(state.tagsViewList)
  })
}
// 处理单标签时，第二次的值未覆盖第一次的 tagsViewList 值（Session Storage）
const singleAddTagsView = (path: string, to?: any) => {
  const isDynamicPath = to.meta.isDynamic ? to.meta.isDynamicPath : path
  state.tagsViewList.forEach((v) => {
    const flag = v.path === isDynamicPath && !isObjectValueEqual(
      to.meta.isDynamic ? (v.params ? v.params : null) : v.query ? v.query : null,
      to.meta.isDynamic ? (to?.params ? to?.params : null) : to?.query ? to?.query : null
    )
    if (flag) {
      to.meta.isDynamic ? (v.params = to.params) : (v.query = to.query)
      v.url = setTagsViewHighlight(v)
      addBrowserSetSession(state.tagsViewList)
    }
  })
}
// 存储 tagsViewList 到浏览器临时缓存中，页面刷新时，保留记录
const addBrowserSetSession = (tagsViewList: Array<object>) => {
  Session.set('tagsViewList', tagsViewList)
}
onBeforeMount(() => {
})
/**
 * @description: 当前的 tagsView 项点击时
 * @return {*}
 */
const onTagsClick = (v: any, k: number) => {
  state.tagsRefsIndex = k
  router.push(v)
}
/**
 * @description: 右键点击时：传 x,y 坐标值到子组件中（props）
 * @return {*}
 */
const onContextmenu = (v: any, e: any) => {
  const { clientX, clientY } = e
  state.dropdown.x = clientX
  state.dropdown.y = clientY
  // contextmenuRef.value.openContextmenu(v)
}
/**
 * @description: 设置 tagsView 高亮
 * @return {*}
 */
const isActive = (v: RouteParams) => {
  if ((v.query && Object.keys(v.query).length) || (v.params && Object.keys(v.params).length)) {
    // 普通传参
    return v.url ? v.url === state.routeActive : v.path === state.routeActive
  } else {
    // 通过 name 传参，params 取值，刷新页面参数消失
    // https://gitee.com/lyt-top/vue-next-admin/issues/I51RS9
    return v.path === state.routePath
  }
}
/**
 * @description: 鼠标滚轮滚动
 * @param {*} e
 * @return {*}
 */
const onHandleScroll = (e: any) => {
  proxy.$refs.scrollbarRef.$refs.wrap$.scrollLeft += e.wheelDelta / 4
}
</script>
<style>
.layout-navbars-tagsview {
  background-color: #ffffff;
  border-bottom: 1px solid #f1f2f3;
  position: relative;
  z-index: 4;
  height: 35px;
}
</style>
<style scoped lang="scss">
.layout-navbars-tagsview {
  background-color: var(--el-color-white);
  border-bottom: 1px solid var(--next-border-color-light);
  position: relative;
  z-index: 4;

  :deep(.el-scrollbar__wrap) {
    overflow-x: auto !important;
  }

  &-ul {
    list-style: none;
    margin: 0;
    padding: 0;
    height: 34px;
    display: flex;
    align-items: center;
    color: var(--el-text-color-regular);
    font-size: 12px;
    white-space: nowrap;
    padding: 0 15px;

    &-li {
      height: 26px;
      line-height: 26px;
      display: flex;
      align-items: center;
      border: 1px solid var(--el-border-color-lighter);
      padding: 0 15px;
      margin-right: 5px;
      border-radius: 2px;
      position: relative;
      z-index: 0;
      cursor: pointer;
      justify-content: space-between;

      &:hover {
        background-color: var(--el-color-primary-light-9);
        color: var(--el-color-primary);
        border-color: var(--el-color-primary-light-5);
      }

      &-iconfont {
        position: relative;
        left: -5px;
        font-size: 12px;
      }

      &-icon {
        border-radius: 100%;
        position: relative;
        height: 14px;
        width: 14px;
        text-align: center;
        line-height: 14px;
        right: -5px;

        &:hover {
          color: var(--el-color-white);
          background-color: var(--el-color-primary-light-3);
        }
      }

      .layout-icon-active {
        display: block;
      }

      .layout-icon-three {
        display: none;
      }
    }

    .is-active {
      color: var(--el-color-white);
      background: var(--el-color-primary);
      border-color: var(--el-color-primary);
      transition: border-color 3s ease;
    }
  }

  // 风格5
  .tags-style-five {
    align-items: flex-end;

    .tags-style-five-svg {
      -webkit-mask-box-image: url("data:image/svg+xml,%3Csvg width='68' height='34' viewBox='0 0 68 34' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='m27,0c-7.99582,0 -11.95105,0.00205 -12,12l0,6c0,8.284 -0.48549,16.49691 -8.76949,16.49691l54.37857,-0.11145c-8.284,0 -8.60908,-8.10146 -8.60908,-16.38546l0,-6c0.11145,-12.08445 -4.38441,-12 -12,-12l-13,0z' fill='%23409eff'/%3E%3C/svg%3E") 12 27 15;
    }

    .layout-navbars-tagsview-ul-li {
      padding: 0 5px;
      border-width: 15px 27px 15px;
      border-style: solid;
      border-color: transparent;
      margin: 0 -15px;

      .layout-icon-active,
      .layout-navbars-tagsview-ul-li-iconfont,
      .layout-navbars-tagsview-ul-li-refresh {
        display: none;
      }

      .layout-icon-three {
        display: block;
      }

      &:hover {
        @extend .tags-style-five-svg;
        background: var(--el-color-primary-light-9);
        color: unset;
      }
    }

    .is-active {
      @extend .tags-style-five-svg;
      background: var(--el-color-primary-light-9) !important;
      color: var(--el-color-primary) !important;
      z-index: 1;
    }
  }
}

.layout-navbars-tagsview-shadow {
  box-shadow: rgb(0 21 41 / 4%) 0px 1px 4px;
}
</style>
