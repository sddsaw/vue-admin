<template>
  <div>
    菜单11
    <el-input v-model="val" placeholder="menu11：请输入内容测试路由缓存" />
  </div>
</template>

<script lang='ts' setup name="menu11">
import { ref, onMounted } from 'vue'
const val = ref('')
onMounted(() => {
  console.log('进来了')
})
</script>
