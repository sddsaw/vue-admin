<template>
  <div class="scree-full-container">
    <div class="layout-navbars-breadcrumb-user-icon">
      <el-popover placement="bottom" trigger="click" :width="300" transition="el-zoom-in-top" :persistent="false">
        <template #reference>
          <el-badge :is-dot="true">
            <el-icon>
              <Bell />
            </el-icon>
          </el-badge>
        </template>
        <template #default>
          <UserNews />
        </template>
      </el-popover>
    </div>
    <div class="layout-navbars-breadcrumb-user-icon mr-10" @click="onScreenfullClick">
      <i
        class="iconfont"
        :title="isScreenfull ? '开全屏' : '关全屏'"
        :class="!isScreenfull ? 'icon-fullscreen' : 'icon-tuichuquanping'"
      />
    </div>
  </div>
</template>

<script lang='ts' setup>
import { ref } from 'vue'
import screenfull from 'screenfull'
import { ElMessage } from 'element-plus'
import { Bell } from '@element-plus/icons-vue'
import UserNews from './UserNews.vue'
const isScreenfull = ref<Boolean>(false)
const onScreenfullClick = () => {
  if (!screenfull.isEnabled) {
    ElMessage.warning('暂不不支持全屏')
    return false
  }
  screenfull.toggle()
  screenfull.on('change', () => {
    if (screenfull.isFullscreen) isScreenfull.value = true
    else isScreenfull.value = false
  })
}
</script>
<style lang="scss" scoped>
.scree-full-container {
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .layout-navbars-breadcrumb-user {
    &-icon {
      padding: 0 10px;
      cursor: pointer;
      color: var(--next-bg-topBarColor);
      height: 50px;
      line-height: 50px;
      display: flex;
      align-items: center;

      &:hover {
        background: var(--next-color-user-hover);

        i {
          display: inline-block;
          animation: logoAnimation 0.3s ease-in-out;
        }
      }

      &:deep(.el-dropdown) {
        color: var(--next-bg-topBarColor);
      }

      &:deep(.el-badge) {
        height: 40px;
        line-height: 40px;
        display: flex;
        align-items: center;
      }

      &:deep(.el-badge__content.is-fixed) {
        top: 12px;
      }
    }

  }
}
</style>
