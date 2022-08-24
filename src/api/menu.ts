
/**
 * @description: 用户类型接口
 * @return {*}
 */
import request from '@/utils/request'

/**
  * @description: 获取Admin菜单
  * @return {*}
  */
export const getAdminMenu = () => {
  return request({
    method: 'GET',
    loading: true,
    url: '/mock/api/getAdminMenu'
  })
}
/**
  * @description: 获取test菜单
  * @return {*}
  */
export const getTestMenu = () => {
  return request({
    method: 'GET',
    loading: true,
    url: '/mock/api/getTestMenu'
  })
}
