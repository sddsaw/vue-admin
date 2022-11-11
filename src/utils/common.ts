import { ElLoading, ElMessageBox, ElNotification } from 'element-plus'

/**
 * @description 全局多彩加载层
 * @param {number} index 自定义加载图标类名ID
 * @param {string} text 显示在加载图标下方的加载文案
 */
export const baseColorfullLoading = (text = '正在加载中...') => {
  const loading = ElLoading.service({
    lock: true,
    text,
    spinner: 'dots-loader',
    background: 'rgba(0, 0, 0, 0.4)'
  })
  return loading
}
/**
 * @description 全局Confirm
 * @param {string|VNode} content 消息正文内容
 * @param {string} title 标题
 * @param {function} callback1 确认回调
 * @param {function} callback2 关闭或取消回调
 * @param {string} confirmButtonText 确定按钮的文本内容
 * @param {string} cancelButtonText 取消按钮的自定义类名
 */
export const baseConfirm = (content:string = '', title:string = '', callback1:any = undefined, callback2:any = undefined, confirmButtonText:string = '确定', cancelButtonText:string = '取消') => {
  return ElMessageBox.confirm(content, title || '温馨提示', {
    confirmButtonText,
    cancelButtonText,
    closeOnClickModal: false,
    type: 'warning',
    lockScroll: true
  }).then(() => {
    if (callback1) callback1()
  }).catch(() => {
    if (callback2) callback2()
  })
}

/**
 * @description 全局Notification
 * @param {string} message 说明文字
 * @param {string|VNode} title 标题
 * @param {'success'|'warning'|'info'|'error'} type 主题样式,如果不在可选值内将被忽略
 * @param {'top-right'|'top-left'|'bottom-right'|'bottom-left'} position 自定义弹出位置
 * @param duration 显示时间,毫秒
 */
export const baseNotify = (message:string, title:string, type:any = 'success', position:any = 'top-right', duration:number = 3000) => {
  ElNotification({
    title,
    message,
    type,
    duration,
    position
  })
}
