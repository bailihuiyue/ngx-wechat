import { Action,Store } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';
interface exampleState {
    type:string;
    payload:number;
  }
export function counterReducer(state: number = 0, action:{type:string,payload:number}) {
  switch (action.type) {
    case INCREMENT:
      return state + action.payload;
    case DECREMENT:
      return state - action.payload;
    case RESET:
      return 0;
    default:
      return state;
  }
}


/*
app.modules中引入
    import { counterReducer } from './redux/example.redux'
    import { StoreDevtoolsModule } from '@ngrx/store-devtools';


imports中导入:
    StoreModule.forRoot({ count: counterReducer }),
    StoreDevtoolsModule.instrument()

component中使用:
      声明:count$: Observable<number>;
      constructor(private store: Store<number>) {
        //获取redux值
        this.count$ = store.select('count');  
      }

      //修改redux值
      this.store.dispatch({ type: DECREMENT,payload:2 });
  }
*/ 