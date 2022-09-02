// 项目配置
export interface IError{
  err: unknown,
  file: string | undefined,
  info: string,
  time:number
}
export interface IAppConfig{
  errorLog:IError[],
  appTitle?:string,
  isCollapse:boolean, // 侧边栏开关
  isWartermark:boolean, // 是否开启水印
  wartermarkText:string, // 水印文案
  isShareTagsView: boolean, // 是否开启 TagsView 共用
  isCacheTagsView:boolean, // 是否开启 TagsView 缓存
  isRequestRoutes:boolean, // 是否开启后端控制路由 true是，false否
  isSortableTagsView: boolean, // 是否开启 TagsView 拖拽
}

// 路由缓存列表
export interface IKeepAliveNamesState{
  keepAliveNames:Array<string>,
  cachedViews:Array<string>
}
// 路由列表
export interface RoutesListState{
  routesList: Array<string>;
  isColumnsMenuHover: Boolean;
  isColumnsNavHover: Boolean;
}

// 后端返回原始路由(未处理时)
export interface IRequestOldRoutesState{
  requestOldRoutes: Array<string>;
}

// TagsView 路由列表
export interface ITagsViewRoutesState {
  tagsViewRoutes: Array<string>;
  isTagsViewCurrenFull: Boolean;
}
