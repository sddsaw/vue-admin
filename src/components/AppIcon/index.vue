<template>
  <!-- <span class="iconify" :data-icon="props.icon" /> -->
  <Icon :icon="props.icon" />
</template>

<script lang='ts' setup>
import { Icon } from '@iconify/vue'
const props = defineProps<{
  icon:string,
  size?:string
}>()
</script>
