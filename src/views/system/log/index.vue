<template>
  <div class="log-wrap">
    日志管理
    <el-button @click="errorHandel">
      错误测试
    </el-button>
    <el-card class="box-card">
      <el-table :data="tableData" style="width: 100%" border size="small">
        <el-table-column prop="date" label="类型" width="80">
          <template #default>
            <el-tag class="ml-2" type="danger">
              bug
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="err" label="错误对象" />
        <el-table-column prop="file" label="错误地址" />
        <el-table-column prop="info" label="错误来源类型" />
        <el-table-column prop="time" label="时间">
          <template #default="scope">
            {{ dayjs(scope.row.time).format("YYYY-MM-DD HH:mm:ss") }}
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script lang='ts' setup>
import dayjs from 'dayjs'
import { ref, computed } from 'vue'
import appConfigStore from '@/store/appConfig'
import { storeToRefs } from 'pinia'
const appConfig = appConfigStore()
const { errorLog } = storeToRefs(appConfig)
console.log(errorLog.value)
const obj = ref({})
const errorHandel = ():void => {
  console.log(obj)
}
const tableData = computed(() => {
  console.log(errorLog.value)
  return errorLog.value
})

</script>

<style lang='scss' scoped>
</style>
