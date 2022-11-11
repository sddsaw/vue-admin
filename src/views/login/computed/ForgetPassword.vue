<template>
  <div class="forget-password-warp">
    <el-form
      size="default"
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      class="demo-ruleForm"
      label-width="80px"
      label-position="left"
      clearable
      @submit.prevent="submitForm(ruleFormRef)"
    >
      <!-- status-icon -->
      <!--  -->
      <el-form-item label="手机号" prop="mobile" class="login-animation1">
        <el-input v-model="ruleForm.mobile" placeholder="请输入手机号码" />
      </el-form-item>
      <el-form-item label="密码" prop="password" class="login-animation2">
        <el-input v-model="ruleForm.password" placeholder="请输入新密码" />
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass" class="login-animation3">
        <el-input v-model="ruleForm.checkPass" placeholder="请再次输入新密码" />
      </el-form-item>
      <el-row :gutter="20" class="mb-20 login-animation4">
        <el-col :span="16">
          <el-form-item label="验证码" prop="code">
            <el-input v-model.number="ruleForm.code" placeholder="请输入手机验证码" />
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-button @click="sendCode" :disabled="codeDisabled">
            发送验证码
          </el-button>
        </el-col>
      </el-row>
      <el-form-item class="login-animation5">
        <el-button class="w-2/6" @click="forgetPass">
          返回
        </el-button>
        <el-button
          class="w-3/6"
          type="primary"
          native-type="submit"
        >
          提交
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, computed } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { isPhone, isPassword, isNumber } from '@/utils/validate'
interface IforgetPasswordParams {
  mobile: string, // 手机号
  password: string, // 密码
  checkPass: string, // 确认密码
  code: string// 验证码
}
interface Emits {
  (event:'checkMode', isScan:boolean):void
}
const emits = defineEmits<Emits>()
const isScan = ref(false)

const forgetPass = () => {
  isScan.value = !isScan.value
  emits('checkMode', isScan.value)
}
const codeDisabled = computed(() => !isPhone(ruleForm.mobile))
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<IforgetPasswordParams>({
  mobile: '', // 手机号
  password: '', // 密码
  checkPass: '', // 确认密码
  code: ''// 验证码
})
/**
 * @description: 自定义验证手机号规则
 * @param {*} rule
 * @param {*} value
 * @param {*} callback
 * @return {*}
 */
const checkMobile = (rule: any, value: any, callback: any) => {
  if (!value) return callback(new Error('请输入手机号码'))
  if (!isPhone(value)) callback(new Error('请输入正确的手机号码'))
  else callback()
}
/**
 * @description: 自定义验证密码
 * @param {*} rule
 * @param {*} value
 * @param {*} callback
 * @return {*}
 */
const validatePass = (rule: any, value: any, callback: any) => {
  if (!value) {
    callback(new Error('请输入密码'))
  } else {
    if (!isPassword(value)) {
      callback(new Error('请输入符合6-12位且须包含字母'))
    } else {
      if (ruleForm.checkPass !== '') {
        if (!ruleFormRef.value) return
        ruleFormRef.value.validateField('checkPass', () => null)
      }
      callback()
    }
  }
}
/**
 * @description: 自定义确认密码
 * @param {*} rule
 * @param {*} value
 * @param {*} callback
 * @return {*}
 */
const checkePass = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请输入确认密码'))
  } else if (!isPassword(value)) {
    callback(new Error('请输入符合6-12位且须包含字母'))
  } else if (value !== ruleForm.password) {
    callback(new Error('两次密码输入不匹配!'))
  } else {
    callback()
  }
}

/**
 * @description:
 * @return {*}
 */
const checkCode = (rule: any, value: any, callback: any) => {
  if (!value) return callback(new Error('请输入验证码'))
  if (!isNumber(value)) callback(new Error('验证码是个数字!'))
  else callback()
}
const rules = reactive<FormRules>({
  mobile: [
    { validator: checkMobile, trigger: 'blur' }
  ],
  password: [
    { validator: validatePass, trigger: 'blur' }
  ],
  checkPass: [
    { validator: checkePass, trigger: 'blur' }
  ],
  code: [
    { validator: checkCode, trigger: 'blur' }
  ]
})
/**
 * @description: 发送验证码
 * @return {*}
 */
const sendCode = () => {
  console.log('发送验证码')
  // ruleFormRef.value.validateField('mobile', () => null)
}
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}

</script>

<style lang='scss' scoped>
@for $i from 1 through 5 {
  .login-animation#{$i} {
    opacity: 0;
    animation-name: error-num;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
    animation-delay: calc($i/10) + s;
  }
}
</style>
