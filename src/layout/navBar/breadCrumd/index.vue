<template>
  <div class="layout-navbars-breadcrumb-index">
    <ExpandIcon />
    <Right />
  </div>
</template>

<script lang='ts' setup>
import ExpandIcon from './component/Breadcrumb.vue'
import Right from './component/index.vue'
</script>
<style lang="scss" scoped>
.layout-navbars-breadcrumb-index{
  height: 50px;
  display: flex;
  align-items: center;
  background: var(--next-bg-topBar);
  border-bottom: 1px solid #f1f2f3;
  padding: 0 15px ;
  justify-content: space-between;
}

</style>
