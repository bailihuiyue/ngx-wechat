import { Component, OnInit, Input, Output, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { DisplayIndexMenu } from '../../../redux/indexMenu.redux';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-header-button',
  templateUrl: './header-button.component.html',
  styleUrls: ['./header-button.component.scss']
})
export class HeaderButtonComponent implements OnInit {

  @Input() imgSrc: string;
  @Input() href: string;
  @Input() style: string = "";
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
    }else{
      this.router.navigate([this.href]);
    }
  };

  constructor(private router: Router, private store: Store<number>) {

  }

  ngOnInit() {
  }

  changeBlack(e) {
    e.currentTarget.style.backgroundColor = "black";
  }
  changeNormal(e) {
    e.currentTarget.style.backgroundColor = "#1D1C1F";
  }
}
