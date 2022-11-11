<template>
  <!-- <span class="iconify" :data-icon="props.icon" /> -->
  <Icon :icon="props.icon" class="app-icon" />
</template>

<script lang='ts' setup>
import { Icon } from '@iconify/vue'
const props = defineProps<{
  icon:string,
  size?:string
}>()
</script>
<style lang="scss" scoped>
.app-icon{
  width: 24px;
  font-size: 14px;
  margin-right: 5px;
  display: block;
}
</style>
