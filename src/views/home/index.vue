
<template>
  <div>
    <div v-for="item in 100" :key="item">
      首页
      {{ item }}
    </div>
  </div>
</template>
<script lang="ts" setup name="home">
// import { getCurrentInstance } from 'vue'
// import { onMounted } from 'vue'
// import { baseConfirm } from '@/utils/common'
// const { proxy } = getCurrentInstance() as any
// console.log(proxy.$baseColorfullLoading())
// onMounted(() => {
//   baseConfirm()
// })
</script>
<style lang="scss">

</style>
