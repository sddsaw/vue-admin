<template>
  <div class="qr-code" @click="emitLoginMode">
    <app-icon class="icon" :icon="isScan ? 'bi:qr-code-scan' :'material-symbols:computer-outline'" />
    <div class="wrap" />
  </div>
</template>

<script lang='ts' setup>
import AppIcon from '@/components/AppIcon/index.vue'
import { ref } from 'vue'
interface Emits {
  (event:'checkMode', isScan:boolean):void
}
const isScan = ref(true)
const emits = defineEmits<Emits>()
const emitLoginMode = () => {
  isScan.value = !isScan.value
  emits('checkMode', isScan.value)
}

</script>
<style lang="scss" scoped>
  .qr-code{
    position: absolute;
    right: 10px;
    top:10px;
    .icon{
      font-size:50px;
      color: #000;
      cursor: pointer;
      transition: all ease .3s;
      &:hover{
        color: #3370ff;
      }
    }
    .wrap{
      height: 35px;
      width: 75px;
      background: #fff;
      position: absolute;
      right: 0;
      top:20px;
      transform: rotate(45deg);
    }

  }

</style>
