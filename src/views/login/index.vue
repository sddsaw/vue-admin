
<template>
  <div class="common-layout">
    <div class="content">
      <el-row class="login" type="flex" justify="center">
        <div class="left animate__animated animate__fadeInLeft">
          <img alt="logo" class="logo animate__animated animate__fadeInUp animate__delay-1s" src="@/assets/3.png">
        </div>
        <div class="right animate__animated animate__fadeInRight">
          <h1 class="flex justify-center items-center text-2xl focus-in-expand  mb-10">
            欢迎来到vue-admin
          </h1>
          <login-mode @check-mode="checkMode" />
          <scan-code v-if="isScanFlag" />
          <account v-else />
        </div>
      </el-row>
      <div class="animate__animated animate__fadeInUp animate__delay-1s copyright">
        👌分享开源👌让技术发光👌
      </div>
    </div>
    <canvas id="canvas" />
  </div>
</template>
<script lang='ts' setup>
import { onMounted, ref } from 'vue'
// import { start } from '@/utils/start'
import LoginMode from './computed/LoginMode.vue'
import Account from './computed/Account.vue'
import ScanCode from './computed/ScanCode.vue'
onMounted(() => {
  // start()
})
const isScanFlag = ref(false)

const checkMode = (isScan:boolean) => {
  console.log(isScan)
  isScanFlag.value = !isScan
}

</script>
<style lang="scss" scoped>

.el-form{
  margin-bottom: 80px;
}

canvas {
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
}

.common-layout {
  display: grid;
  place-items: center;
  height: 100vh;
  overflow: auto;
  .login {
    min-height: 400px;
    border-radius: 16px;
    overflow: hidden;
  }
  .left {
    width: 325px;
    padding: 3.6% 0 3.6% 3.6%;
    background-color: #3370ff;
    color: #ffffff;
    background-image: url("@/assets/1.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 60% 60%;
    .logo {
      height: 5.7vh;
    }
    .text {
      height: 4.8vh;
      margin-left: 10px;
    }
    .talent {
      font-size: 40px;
      padding: 26% 0 36% 0;
    }
    .kh {
      font-size: 16px;
      font-family: Helvetica;
    }
  }
  .right {
    width: 415px;
    padding: 3.6% ;
    background-color: #fff;
    font-size: 14px;
    position: relative;
    .tips,
    .help {
      padding: 0 5%;
      text-align: center;
    }
    .tips {
      color: #222222;
      font-weight: bold;
    }
    .help {
      color: #888888;
    }
  }
}
.copyright {
  text-align: center;
  margin: 30px auto;
  width: 40%;
  color: #fff;
  position: relative;
  &:before {
    position: absolute;
    content: "";
    top: 50%;
    width: 20%;
    height: 1px;
    left: -30px;
    background-image: linear-gradient(to left, #fff, transparent);
  }
  &:after {
    position: absolute;
    content: "";
    top: 50%;
    width: 20%;
    height: 1px;
    right: -30px;
    background-image: linear-gradient(to right, #fff, transparent);
  }
}

</style>
