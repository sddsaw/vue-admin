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
