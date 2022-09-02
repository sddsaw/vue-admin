<template>
  <div>
    <el-card shadow="always">
      <div class="system-menu-search mb-20">
        <el-input size="default" placeholder="请输入菜单名称" style="max-width: 180px" />
        <el-button size="default" type="primary" class="ml-10">
          <el-icon>
            <Search />
          </el-icon>
          查询
        </el-button>
        <el-button size="default" type="success" class="ml-10" @click="onOpenAddMenu">
          <el-icon>
            <FolderAdd />
          </el-icon>
          新增菜单
        </el-button>
      </div>
      <el-table :data="menuTableData" style="width: 100%" row-key="path" :tree-props="{ children: 'children', hasChildren: 'hasChildren' }">
        <el-table-column label="菜单名称" show-overflow-tooltip>
          <template #default="scope">
            <!-- <app-icon :icon="scope.row.meta.icon" /> -->
            <span class="ml10">{{ scope.row.meta.title }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="path" label="路由路径" show-overflow-tooltip />
        <el-table-column label="组件路径" show-overflow-tooltip>
          <template #default="scope">
            <span>{{ scope.row.component }}</span>
          </template>
        </el-table-column>
        <el-table-column label="权限标识" show-overflow-tooltip>
          <template #default="scope">
            <span>{{ scope.row.meta.roles }}</span>
          </template>
        </el-table-column>
        <el-table-column label="排序" show-overflow-tooltip width="80">
          <template #default="scope">
            {{ scope.$index }}
          </template>
        </el-table-column>
        <el-table-column label="类型" show-overflow-tooltip width="80">
          <template #default="scope">
            <el-tag type="success" size="small">
              {{ scope.row.xx }}菜单
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作" show-overflow-tooltip width="140">
          <template #default="scope">
            <el-button size="small" text type="primary" @click="onOpenAddMenu">
              新增
            </el-button>
            <el-button size="small" text type="primary" @click="onOpenEditMenu(scope.row)">
              修改
            </el-button>
            <el-button size="small" text type="primary" @click="onTabelRowDel(scope.row)">
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <EditMenu ref="editMenuRef" />
  </div>
</template>

<script lang='ts' setup>
import { storeToRefs } from 'pinia'
import useRoutesList from '@/store/routesList'
import { RouteRecordRaw } from 'vue-router'
// import AppIcon from '@/components/AppIcon/index.vue'
import { ref, computed } from 'vue'
import EditMenu from './component/editMenu.vue'
import { FolderAdd, Search } from '@element-plus/icons-vue'
const editMenuRef = ref()
/**
 * @description: 打开新增菜单弹窗
 * @return {*}
 */
// /ref="editMenuRef"
const onOpenAddMenu = () => {
  editMenuRef.value.openDialog()
}

const stores = useRoutesList()
const { routesList } = storeToRefs(stores)
// 获取 vuex 中的路由
const menuTableData = computed(() => {
  return routesList.value
})
const onOpenEditMenu = (row:RouteRecordRaw) => {
}
const onTabelRowDel = (row:RouteRecordRaw) => {
}
</script>
