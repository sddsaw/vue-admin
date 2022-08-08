
/**
 * @description: 用户类型接口
 * @return {*}
 */
import request from '@/utils/request'
import { ILoginInfo, LoginParams } from '@/api/types/user'
export const getLogin = (data:LoginParams) => {
  return request<ILoginInfo>({
    data,
    method: 'POST',
    url: '/mock/api/login'
  })
}
