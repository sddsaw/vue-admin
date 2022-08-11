<template>
  <el-menu
    router
    text-color="#fff"
    :unique-opened="true"
    :collapse="isCollapse"
    background-color="#304156"
    :collapse-transition="false"
    :default-active="route.path"
  >
    <template v-for="val in menuLists">
      <el-sub-menu :index="val.path" v-if="val.children && val.children.length > 0" :key="val.path">
        <template #title>
          <app-icon :icon="val.meta.icon" />
          <span>{{ val.meta.title }}</span>
        </template>
        <sub-item :children-list="val.children" />
      </el-sub-menu>
      <template v-else>
        <el-menu-item :index="val.path" :key="val.path">
          <app-icon :icon="val.meta.icon" />
          <template #title v-if="!val.meta.isLink || (val.meta.isLink && val.meta.isIframe)">
            <span>{{ val.meta.title }}</span>
          </template>
          <template #title v-else>
            <a :href="val.meta.isLink" target="_blank" rel="opener" class="w100">{{ val.meta.title }}</a>
          </template>
        </el-menu-item>
      </template>
    </template>
  </el-menu>
</template>
<script lang="ts" setup>
import { useCounterStore } from '@/store/index'
import { storeToRefs } from 'pinia'
import { RouteRecordRaw, useRoute } from 'vue-router'
import { computed } from 'vue'
import AppIcon from '@/components/AppIcon/index.vue'
import SubItem from '@/layout/navMenu/subItem.vue'
const route = useRoute()
const countStore = useCounterStore()
const { isCollapse } = storeToRefs(countStore)
interface Props {
  menuList:RouteRecordRaw[]
}
const props = defineProps<Props>()

const menuLists = computed(() => { return props.menuList })
</script>
<style>
.el-menu{
  border-right: none;
  user-select:none;
}
.el-menu:not(.el-menu--collapse) {
  width: 200px;
}
</style>
