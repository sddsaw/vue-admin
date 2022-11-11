<template>
  <el-config-provider size="large">
    <router-view />
  </el-config-provider>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'
import userStore from '@/store/userInfo'
import setIntroduction from '@/utils/setIconfont'
import { onBeforeMount, onMounted, onUnmounted, ref } from 'vue'
const timer = ref(0)
const router = useRouter()
const createUserStore = userStore()
const env = import.meta.env.MODE !== 'development'
window.addEventListener(
  'click',
  () => {
    // 为了方便，我们把点击事件的时间直接存到sessionStorage中去，这样方便获取比较
    if (router.currentRoute.value.name === 'login' && env) return
    createUserStore.lastClickTime = new Date().getTime()
  },
  true
)
// 设置初始化，防止刷新时恢复默认
onBeforeMount(() => {
  // 设置批量第三方 icon 图标
  setIntroduction.cssCdn()
  // 设置批量第三方 js
  setIntroduction.jsCdn()
})
onMounted(() => {
  if (env) isTimeOut()
})
function isTimeOut () {
  // 使用定时器之前，要清除一下定时器
  clearInterval(Number(timer))
  timer.value = window.setInterval(() => {
    // setInterval不能用 要用window.setInterval 计时器"不可分配给类型
    const lastClickTime = Number(createUserStore.lastClickTime)
    const nowTime = new Date().getTime() // 获取当前时间
    if (router.currentRoute.value.name === 'login') return
    // 假设我们需求是：5秒钟不进行点击操作，就提示登录退出
    if (nowTime - lastClickTime > 30 * 60 * 1000) {
      clearInterval(Number(timer))
      // ElMessage({
      //   type: 'success',
      //   message: '长时间未操作，请重新登录'
      // })
      createUserStore.resetState()
      router.push({ path: '/login' })
    }
  }, 10000)
}
onUnmounted(() => {
  // 最后一步，离开页面的时候，清除一下定时器，也解绑点击事件
  clearInterval(Number(timer))
  window.removeEventListener('click', () => {}, true)
})
</script>
<style scoped>

</style>
