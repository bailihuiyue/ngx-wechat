//练习redux的页面,没什么用
import { Action } from '@ngrx/store';
import { NgModule } from '@angular/core';

export const enum maskStatus {
  Show = "SHOW",
  Hide = 'HIDE',
}
interface exampleState {
  type: string;
  payload: number;
}
export function maskStatusReducer(state: string, action: { type: string, payload: string }) {
  switch (action.type) {
    case maskStatus.Show:
      return false;
    case maskStatus.Hide:
      return true;
    default:
      return "unknow maskStatus";
  }
}