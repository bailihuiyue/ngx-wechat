import { Component, OnInit } from '@angular/core';
import { indexMenuAnimation } from "../../../anim/indexMenu";
import { Store } from '@ngrx/store';
import { DisplayIndexMenu } from '../../../redux/indexMenu.redux';
@Component({
  selector: 'app-index-menu',
  templateUrl: './index-menu.component.html',
  styleUrls: ['./index-menu.component.scss'],
  animations: [indexMenuAnimation]
})
export class IndexMenuComponent implements OnInit {

  show: boolean = false;
  constructor(private store: Store<number>) {
  }

  ngOnInit() {
    this.store.select('DisplayIndexMenuReducer').subscribe(data => this.show = data);
    //目前不会给redux添加默认值,故在此添加下
    this.store.dispatch({ type: DisplayIndexMenu.Hide });
  }
}
