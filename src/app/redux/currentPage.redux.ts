//练习redux的页面,没什么用
import { Action } from '@ngrx/store';
import { NgModule } from '@angular/core';

export const enum CurrentPage {
  Index = 'INDEX',
  Address = 'ADDRESS',
  RESET = 'RESET',
  Search = "SEARCH"
}
interface exampleState {
  type: string;
  payload: number;
}
export function currentPageReducer(state: string, action: { type: string, payload: string }) {
  switch (action.type) {
    case CurrentPage.Index:
      return 'index';
    case CurrentPage.Address:
      return 'addr';
    case CurrentPage.Search:
      return 'search';
    case CurrentPage.RESET:
      return 0;
    default:
      return "unknow page";
  }
}