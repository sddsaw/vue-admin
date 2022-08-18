<template>
  <div class="error layout-view-bg-white" :style="{ height: `calc(100vh - ${initTagViewHeight}` }">
    <div class="error-flex">
      <div class="left">
        <div class="left-item">
          <div class="left-item-animation left-item-num">
            401
          </div>
          <div class="left-item-animation left-item-title">
            您未被授权，没有操作权限~
          </div>
        </div>
      </div>
      <div class="right">
        <img
          src="https://img-blog.csdnimg.cn/3333f265772a4fa89287993500ecbf96.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAbHl0LXRvcA==,size_16,color_FFFFFF,t_70,g_se,x_16"
        >
      </div>
    </div>
  </div>
</template>

<script lang='ts' setup>
</script>

<style lang='scss' scoped>
@import './index.scss';
</style>
