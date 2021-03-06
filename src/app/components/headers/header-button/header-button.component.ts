import { Component, OnInit, Input, Output, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { DisplayIndexMenu } from '../../../redux/indexMenu.redux';
import { maskStatus } from '../../../redux/mask.redux';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-header-button',
  templateUrl: './header-button.component.html',
  styleUrls: ['./header-button.component.scss']
})
export class HeaderButtonComponent implements OnInit {

  @Input() imgSrc: string;
  @Input() href: string;
  @Input() style: object = { position: "absolute", top: 0, left: 0 };
  @Input() btnColor: string = "";
  status: boolean = false;

  //控制底部菜单的显示与隐藏
  maskHidden: boolean = true;
  //maskMenu的数据
  maskMenuName: string = "";
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
    } else if (this.href === "redMore") {//红包的更多(...)按钮
      this.store.dispatch({ type: maskStatus.Show });
      this.maskMenuName = "redEnvelope";
    }else if(this.href === "userDetailMore"){//用户详情页的右上角...按钮
      this.store.dispatch({ type: maskStatus.Show });
      this.maskMenuName = "userDetailMore";
    }else if(this.href === "others"){
      alert('敬请期待');
    }else {
      this.router.navigate([this.href]);
    }
  };

  constructor(private router: Router, private store: Store<number>) {

  }

  ngOnInit() {
  }

  touched(e) {
    let color = "black";
    if (this.btnColor === "red") {
      color = "#F4AF9C";
    }else if(this.btnColor==="transparent"){
      color = "#ffffff40";
    }
    e.currentTarget.style.backgroundColor = color;
  }
  normal(e) {
    let color = "#1D1C1F";
    if (this.btnColor === "red") {
      color = "#D85940";
    }else if(this.btnColor==="transparent"){
      color = "transparent";
      e.currentTarget.style.opacity = "1";
    }
    e.currentTarget.style.backgroundColor = color;
  }
}
