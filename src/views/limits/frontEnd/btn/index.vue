<template>
  <div>
    前端控制按钮
    <el-button v-auth="1">
      1
    </el-button>
    <el-button v-auths="[1,7]">
      2
    </el-button>
    <el-button v-auth-all="[1,2,3]">
      3
    </el-button>
  </div>
</template>

<script lang='ts' setup>
</script>
