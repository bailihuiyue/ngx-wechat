import { Component, OnInit, Input, Output, HostListener, ViewEncapsulation, ViewChild, OnDestroy  } from '@angular/core';
import { Router } from '@angular/router';
import { DisplayIndexMenu } from '../../../redux/indexMenu.redux';
import { Store } from '@ngrx/store';

import { SkinType } from 'ngx-weui';
import { ActionSheetService, ActionSheetConfig, ActionSheetComponent } from "ngx-weui/src/actionsheet";
@Component({
  selector: 'app-header-button',
  templateUrl: './header-button.component.html',
  styleUrls: ['./header-button.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderButtonComponent implements OnInit {

  @Input() imgSrc: string;
  @Input() href: string;
  @Input() style: string = "";
  @Input() btnColor: string = "";
  status: boolean = false;
  @HostListener('click') onClick() {
    if (this.href === "back") {
      window.history.back();
    } else if (this.href === "showMenu") {
      if (this.status) {
        this.store.dispatch({ type: DisplayIndexMenu.Hide });
      } else {
        this.store.dispatch({ type: DisplayIndexMenu.Show });
      }
      //获取redux/store的值
      this.store.select('DisplayIndexMenuReducer').subscribe(data => this.status = data);
    }else if(this.href ==="redMore"){
      alert("敬请期待!");
    }else{
      this.router.navigate([this.href]);
    }
  };

  constructor(private router: Router, private store: Store<number>) {

  }

  ngOnInit() {
  }

  touched(e) {
    let color="black";
    if(this.btnColor==="red"){
      color="#F4AF9C";
    }
    e.currentTarget.style.backgroundColor = color;
  }
  normal(e) {
    let color="#1D1C1F";
    if(this.btnColor==="red"){
      color="#D85940";
    }
    e.currentTarget.style.backgroundColor = color;
  }
}
