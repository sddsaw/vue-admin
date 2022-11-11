// 定义接口来定义对象的类型
export interface TagsViewState {
  routeActive: string;// 当前激活的路由
  routePath: string | unknown;
  dropdown: {
  x: string | number;
  y: string | number;
  };
  sortable: any;
  tagsRefsIndex: number;
  tagsViewList: any[];
  tagsViewRoutesList: any[];
}
export interface RouteParams {
  path: string;
  url: string;
  query: object;
  params: object;
}
