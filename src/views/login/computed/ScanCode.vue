<template>
  <!-- animate__animated animate__fadeInUp animate__delay -->
  <div class="code-wrap ">
    <img src="@/assets/images/code.png">
    <span>打开手机钉钉扫一扫</span>
  </div>
</template>

<script lang='ts' setup>

</script>

<style lang='scss' scoped>

.login-scan-animation {
  opacity: 0;
  animation-name: error-num;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
}
.code-wrap{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @extend .login-scan-animation;
  animation-delay: 0.1s;
  img{
    width: 200px;
    height: 200px;
    margin-bottom: 20px;
  }
  span{
    color: #c0c4cc;
    @extend .login-scan-animation;
    animation-delay: 0.2s;
  }
}
</style>
