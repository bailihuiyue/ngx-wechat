import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
//TODO:发现在angular中实现路由回退功能使用BOM原生:window.history.back()即可
//故该service废弃
export class RouteHistoryService {
  routeHistory:Array<string>=[];
  constructor() { }

}
