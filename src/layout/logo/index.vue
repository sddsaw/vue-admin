<template>
  <div class="layout-logo" v-if="!isCollapse" @click="onThemeConfigChange">
    <img src="@/assets/3.png" class="layout-logo-medium-img">
    <span>vue-pre-admin</span>
  </div>
  <div class="layout-logo-size" v-else @click="onThemeConfigChange">
    <img src="@/assets/3.png" class="layout-logo-size-img">
  </div>
</template>

<script lang='ts' setup>
import { computed } from 'vue'
import { useCounterStore } from '@/store/index'
const createUseCounterStore = useCounterStore()
const isCollapse = computed(() => { return createUseCounterStore.isCollapse })
const onThemeConfigChange = ():void => {

}
</script>

<style lang='scss' scoped>
img {
  width: 40px;
}

.layout-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  font-size: 16px;
  cursor: pointer;
  overflow: hidden;
  animation: logoAnimation 0.3s ease-in-out;

  span {
    white-space: nowrap;
    display: inline-block;
    color: aquamarine;
  }
}

.layout-logo-size {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  display: flex;
  cursor: pointer;
  animation: logoAnimation 0.3s ease-in-out;

  img {
    width: 30px;
    margin: auto;
  }

  &:hover {
    img {
      animation: logoAnimation 0.3s ease-in-out;
    }
  }
}

/* logo 过渡动画
------------------------------- */
@keyframes logoAnimation {
  0% {
    transform: scale(0);
  }

  80% {
    transform: scale(1.1);
  }

  100% {
    transform: scale(1);
  }
}

</style>
