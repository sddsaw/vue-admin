/// <reference types="vite/client" />
/**
 * @description: ts不识别.vue
 * @return {*}
 */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
// 声明文件，定义全局变量。其它 app.config.globalProperties.xxx，使用 getCurrentInstance() 来获取
// eslint-disable-next-line no-unused-vars
interface Window {
  nextLoading: boolean;
}
