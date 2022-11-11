<template>
  <template v-for="val in childrenLists">
    <el-sub-menu :index="val.path" :key="val.path" v-if="val.children && val.children.length > 0">
      <template #title>
        <AppIcon :icon="val.meta.icon" />
        <span>{{ val.meta.title }}</span>
      </template>
      <sub-item :children-list="val.children" />
    </el-sub-menu>
    <template v-else>
      <el-menu-item :index="val.path" :key="val.path">
        <template v-if="!val.meta.isLink || (val.meta.isLink && val.meta.isIframe)">
          <AppIcon :icon="val.meta.icon" />
          <span>{{ val.meta.title }}</span>
        </template>
        <template v-else>
          <a :href="val.meta.isLink" target="_blank" rel="opener" class="w100">
            <AppIcon :icon="val.meta.icon" />
            {{ val.meta.title }}
          </a>
        </template>
      </el-menu-item>
    </template>
  </template>
</template>

<script lang='ts' setup name="subItem">
import { computed } from 'vue'
import AppIcon from '@/components/AppIcon/index.vue'
import { childrenType } from '../type'

interface Props {
  childrenList:childrenType[]
}
const props = defineProps<Props>()
const childrenLists = computed(() => { return props.childrenList })
</script>
