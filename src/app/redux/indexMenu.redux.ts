import { Action } from '@ngrx/store';
import { NgModule } from '@angular/core';

export const enum DisplayIndexMenu {
  Show = 'SHOW',
  Hide = 'HIDE'
}
export function DisplayIndexMenuReducer(state: boolean=false, action: { type: string, payload: string }) {
  switch (action.type) {
    case DisplayIndexMenu.Show:
      return true;
    case DisplayIndexMenu.Hide:
      return false;
    default:
      return "unknow show/hide";
  }
}