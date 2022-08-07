<template>
  <span class="iconify" :data-icon="props.icon" />
</template>

<script lang='ts' setup>
const props = defineProps<{
  icon:string
}>()
</script>
