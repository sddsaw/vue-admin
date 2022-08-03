<template>
  <div class="layout-navbars-breadcrumb-index">
    <ExpandIcon />
  </div>
</template>

<script lang='ts' setup>
import ExpandIcon from './component/breadcrumb.vue'
</script>
<style lang="scss" scoped>
.layout-navbars-breadcrumb-index{
  height: 50px;
  display: flex;
  align-items: center;
  background: var(--next-bg-topBar);
  border-bottom: 1px solid #f1f2f3;
  padding: 0 15px ;
}

</style>
