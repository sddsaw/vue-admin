import 'vue-router'

export {}
/**
 * @description: 配置router.meat options
 * @return {*}
 */
declare module 'vue-router' {
  // eslint-disable-next-line no-unused-vars
  interface RouteMeta {
    title?:string,
    requiresAuth?:boolean
  }
}
