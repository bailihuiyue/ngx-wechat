import { Component, OnInit, Input, Inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { maskStatus } from '../../redux/mask.redux';
@Component({
  selector: 'app-mask',
  templateUrl: './mask.component.html',
  styleUrls: ['./mask.component.scss']
})
export class MaskComponent implements OnInit {

  @Input()
  maskMenuName: string;
  maskData: any;
  maskHidden: boolean;
  constructor(@Inject('BASE_CONFIG') private config, private store: Store<number>) { }
  //imgRedEnvelope
  ngOnInit() {
    // switch (this.maskMenuName) {
    //   case "redEnvelope":
    //     this.maskData = [
    //       ["红包记录"],
    //       ["帮助中心"]
    //     ];
    //     break;
    // }
    //初始化redux值
    this.store.dispatch({ type: maskStatus.Hide });
    this.store.select('maskStatusReducer').subscribe(data => this.maskHidden = data);
  }
  hideMask(e) {
    this.store.dispatch({ type: maskStatus.Hide });
    //用来阻止冒泡
    e.preventDefault();
  }
}
