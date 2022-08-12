import { ElLoading } from 'element-plus'
/**
 * @description 全局多彩加载层
 * @param {number} index 自定义加载图标类名ID
 * @param {string} text 显示在加载图标下方的加载文案
 */
export const baseColorfullLoading = (text = '正在加载中...') => {
  const loading = ElLoading.service({
    lock: true,
    text,
    // customClass: 'dots-loader',
    // spinner: 'dots-loader',
    background: 'rgba(0, 0, 0, 0.4)'
  })
  return loading
}
