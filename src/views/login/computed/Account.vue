<template>
  <el-form
    :model="parmas"
    @submit.prevent="handelSubmit"
  >
    <el-form-item>
      <el-input v-model="parmas.userName" :prefix-icon="User" placeholder="请输入用户名" />
    </el-form-item>
    <el-form-item>
      <el-input v-model="parmas.passWord" placeholder="请输入密码">
        <template #prefix>
          <el-icon class="el-input__icon">
            <Lock />
          </el-icon>
        </template>
        <template #suffix>
          <app-icon icon="ph:eye-light" />
        </template>
      </el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" native-type="submit" class="w-full" size="large">
        登录
      </el-button>
    </el-form-item>
  </el-form>
  <span class="tips">* 温馨提示：建议使用谷歌、Microsoft Edge，版本 79.0.1072.62 及以上浏览器，360浏览器请使用极速模式</span>
</template>

<script lang='ts' setup>
import { reactive } from 'vue'
import { Lock, User } from '@element-plus/icons-vue'
import AppIcon from '@/components/AppIcon/index.vue'

interface From {
  userName:string;
  passWord:string
}
const parmas:From = reactive({
  userName: '',
  passWord: ''
})
const handelSubmit = () => {
  console.log('提交')
}
</script>

<style lang='scss' scoped>
.tips{
  color: #c0c4cc;
  font-size: 12px;
}
</style>
