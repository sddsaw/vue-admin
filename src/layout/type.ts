export interface childrenType {
  path?: string;
  children: childrenType[];
  meta: {
    icon: string;
    title?: string;
    isLink?:string;
    isHide?:boolean;
    isKeepAlive?:boolean;
    isAffix?:boolean;
    isIframe?:boolean;
  };
}
