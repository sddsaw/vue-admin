export interface ILoginInfo {
  accessToken: string,
  tokenType: string,
  userId: string,
  avatar: string,
  userName: string,
  account: string,
  expiresIn: number// token有效期
}
export type LoginParams = {
  userName:string;
  passWord:string
}
