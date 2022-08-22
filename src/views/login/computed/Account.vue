<template>
  <el-form ref="ruleFormRef" :rules="rules" :model="parmas" @submit.prevent="handelSubmit(ruleFormRef)">
    <el-form-item prop="userName">
      <el-input v-model="parmas.userName" :prefix-icon="User" placeholder="请输入用户名" />
    </el-form-item>
    <el-form-item prop="passWord">
      <el-input :type="isShowPassword ? 'password' : 'text'" v-model="parmas.passWord" placeholder="请输入密码">
        <template #prefix>
          <el-icon class="el-input__icon">
            <Lock />
          </el-icon>
        </template>

        <template #suffix>
          <app-icon
            :icon="isShowPassword ? 'ph:eye-light' : 'ph:eye-closed-duotone'"
            class="login-content-password"
            @click="isShowPassword = !isShowPassword"
          />
        </template>
      </el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" native-type="submit" class="w-full" :loading="loading">
        {{ loading ? '登录中' : '登录' }}
      </el-button>
    </el-form-item>
  </el-form>
  <span class="tips">* 温馨提示：建议使用谷歌、Microsoft Edge，版本 79.0.1072.62 及以上浏览器，360浏览器请使用极速模式</span>
</template>

<script lang='ts' setup>
import { reactive, ref } from 'vue'
import { getLogin } from '@/api/user'
import { ElMessage } from 'element-plus'
import userStore from '@/store/userInfo'
import { LoginParams } from '@/api/types/user'
import { useRouter, useRoute } from 'vue-router'
import { Lock, User } from '@element-plus/icons-vue'
import AppIcon from '@/components/AppIcon/index.vue'
import type { FormInstance, FormRules } from 'element-plus'
// import { initBackEndControlRoutes } from '@/router/backEnd'

const router = useRouter()
const route = useRoute()
const createUserStore = userStore()
const parmas: LoginParams = reactive({
  userName: '',
  passWord: ''
})
const loading = ref(false)
const isShowPassword = ref(true)
const ruleFormRef = ref<FormInstance>()
const rules = reactive<FormRules>({
  userName: [
    {
      required: true,
      message: '请输入用户名',
      trigger: 'change'
    }
  ],
  passWord: [
    {
      required: true,
      message: '请输入密码',
      trigger: 'change'
    }
  ]
})

/**
 * @description: 登录
 * @param {*} formEl
 * @return {*}
 */
const handelSubmit = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  const validData = await formEl.validate()
  if (!validData) return false
  loading.value = true
  const res = await getLogin(parmas)
  createUserStore.userInfo = res
  // await initBackEndControlRoutes()
  loginSuccess()
}

/**
 * @description: 登录成功后的跳转
 * @return {*}
 */
const loginSuccess = () => {
  ElMessage.success('登录成功')
  let redirect = route.query.redirect || '/'
  if (typeof redirect !== 'string') {
    redirect = '/'
  }
  // FIXME 格式校验不过 待修改 应该携带参数
  setTimeout(() => router.replace({
    path: redirect,
    query: {}
  }), 800)
}
</script>

<style lang='scss' scoped>
.tips {
  color: #c0c4cc;
  font-size: 12px;
}

.login-content-password {
  display: inline-block;
  width: 20px;
  cursor: pointer;

  &:hover {
    color: #909399;
  }
}
</style>
