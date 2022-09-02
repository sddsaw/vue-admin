
import pinia from '@/store'
import { storeToRefs } from 'pinia'
import { Directive } from 'vue'
import useUserInfo from '@/store/userInfo'
import type { DirectiveBinding } from 'vue'

/**
 * @description: 单个权限验证（v-auth="xxx"）
 * @return {*}
 */
export const auth:Directive = {
  mounted (el: HTMLElement, binding: DirectiveBinding) {
    const { value } = binding
    if (value) {
      const stores = useUserInfo(pinia)
      const { userInfo } = storeToRefs(stores)
      if (!userInfo?.value?.authBtnList.some((v: string) => v === value)) el?.parentNode.removeChild(el)
    } else {
      throw new Error("need roles! Like v-auth=\"['admin','test']\"")
    }
  }
}

/**
 * @description: 多个权限验证，满足一个则显示（v-auths="[xxx,xxx]"）
 * @return {*}
 */
export const auths:Directive = {
  mounted (el: HTMLElement, binding: DirectiveBinding) {
    const { value } = binding
    if (value) {
      const stores = useUserInfo(pinia)
      const flaglengt = stores?.userInfo?.authBtnList.filter(item => value.indexOf(item) > -1)
      if (!flaglengt?.length) el.parentNode.removeChild(el)
    } else {
      throw new Error("need roles! Like v-auth=\"['admin','test']\"")
    }
  }
}

/**
 * @description: 多个权限验证，全部满足则显示（v-auth-all="[xxx,xxx]"）
 * @return {*}
 */
export const authAll:Directive = {
  mounted (el: HTMLElement, binding: DirectiveBinding) {
    const { value } = binding
    const stores = useUserInfo(pinia)
    const authBtnList = stores?.userInfo?.authBtnList || []
    if (value) {
      const result = authBtnList.length === value.length && authBtnList.every(a => value.some(b => a === b)) && value.every(_b => authBtnList.some(_a => _a === _b))
      if (!result) el.parentNode.removeChild(el)
    } else {
      throw new Error("need roles! Like v-auth=\"['admin','test']\"")
    }
  }
}
