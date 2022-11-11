<template>
  <div class="edit-password-container">
    <el-dialog
      width="30%"
      draggable
      title="修改密码"
      destroy-on-close
      v-model="isShowDialog"
    >
      <ForgetPasswordVue />
    </el-dialog>
  </div>
</template>

<script lang='ts' setup>
import ForgetPasswordVue from '@/views/login/computed/ForgetPassword.vue'
import { ref, defineExpose } from 'vue'
const isShowDialog = ref(false)
const openDialog = () => {
  isShowDialog.value = true
}
defineExpose({ openDialog })
</script>

<style lang='scss' scoped>
</style>
