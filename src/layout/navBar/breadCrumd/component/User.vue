<template>
  <el-dropdown :show-timeout="70" :hide-timeout="50" @command="onHandleCommandClick">
    <span class="el-dropdown-link">
      <el-avatar :size="25" :src="userInfo?.avatar" />
      {{ userInfo?.userName }}
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item v-for="(item,index) in elDropdownList" :command="item.command" :key="index">
          {{ item.title }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang='ts' setup>
import { logOut } from '@/api/user'
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import userStore from '@/store/userInfo'
import { ArrowDown } from '@element-plus/icons-vue'
import { ElMessage, ElMessageBox } from 'element-plus'
const stroe = userStore()
const router = useRouter()
const userInfo = stroe.userInfo
interface IelDropdown {
  title:string,
  command:string
}
const elDropdownList = reactive<IelDropdown[]>([
  {
    title: '首页',
    command: 'home'
  },
  {
    title: '代码仓库',
    command: 'home'
  },
  {
    title: '个人中心',
    command: '/personal'
  },
  {
    title: '退出登录',
    command: 'logOut'
  }
])

/**
 * @description: 下拉菜单事件
 * @param {*} path
 * @return {*}
 */
const onHandleCommandClick = (path:string) => {
  if (path === 'logOut') {
    handelLogout()
  } else {
    router.push(path)
  }
}

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
    stroe.resetState()
    ElMessage({
      type: 'success',
      message: '退出成功！'
    })
    router.replace({
      name: 'login'
    })
  }).catch(() => {
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
