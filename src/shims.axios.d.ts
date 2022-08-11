// eslint-disable-next-line no-unused-vars
import { AxiosRequestConfig } from 'axios'

declare module 'axios' {
  export interface AxiosRequestConfig {
    loading?: boolean
  }
}
