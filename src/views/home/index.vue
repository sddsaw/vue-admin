
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
// const { proxy } = getCurrentInstance() as any
// console.log(proxy.$baseColorfullLoading())
</script>
<style lang="scss">

</style>
