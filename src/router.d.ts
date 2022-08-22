import 'vue-router'

/**
 * @description: 配置router.meat options
 * @return {*}
 */
declare module 'vue-router' {
  // eslint-disable-next-line no-unused-vars
  interface RouteMeta {
    icon?:string,
    title?:string,
    isLink?:string,
    isHide?:boolean,
    isAffix?:boolean,
    isIframe?:boolean,
    isKeepAlive?: boolean,
    requiresAuth?:boolean
  }
}
