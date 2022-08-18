<template>
  <el-dropdown :show-timeout="70" :hide-timeout="50">
    <span class="el-dropdown-link">
      <el-avatar :size="25" :src="userInfo?.avatar" />
      {{ userInfo?.userName }}
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>首页</el-dropdown-item>
        <el-dropdown-item>代码仓库</el-dropdown-item>
        <el-dropdown-item>个人中心</el-dropdown-item>
        <el-dropdown-item @click="handelLogout">
          退出登录
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang='ts' setup>
import { ArrowDown } from '@element-plus/icons-vue'
import userStore from '@/store/userInfo'
import { useRouter } from 'vue-router'
import { ElMessage, ElMessageBox } from 'element-plus'
import { logOut } from '@/api/user'
// import { storeToRefs } from 'pinia'
const createUserStroe = userStore()
const createUseRouter = useRouter()
const userInfo = createUserStroe.userInfo
/**
 * @description: 退出登录
 * @return {*}
 */
const handelLogout = ():void => {
  ElMessageBox.confirm('是否要退出登录?', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    buttonSize: 'default'
  }).then(async ():Promise<void> => {
    const res = await logOut()
    console.log(res)
    createUserStroe.resetState()
    ElMessage({
      type: 'success',
      message: '退出成功！'
    })
    createUseRouter.replace({
      name: 'login'
    })
  })
}
</script>
<style lang="scss" scoped>
.el-dropdown-link{
  display: flex;
  align-items: center;
  white-space: nowrap;
  .el-avatar{
    margin-right: 5px ;
  }
}
</style>
