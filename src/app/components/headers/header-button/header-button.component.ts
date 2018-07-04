import { Component, OnInit, Input, Output, HostListener } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-header-button',
  templateUrl: './header-button.component.html',
  styleUrls: ['./header-button.component.scss']
})
export class HeaderButtonComponent implements OnInit {

  @Input() imgSrc: string;
  @Input() href: string;
  @HostListener('click') onClick() {
    if (this.href === "back") {
      window.history.back();
    }else{
      this.router.navigateByUrl(this.href); 
    }
  }
  constructor(private router: Router) { }

  ngOnInit() {
  }

  changeBlack(e) {
    e.currentTarget.style.backgroundColor = "black";
  }
  changeNormal(e) {
    e.currentTarget.style.backgroundColor = "#1D1C1F";
  }
}
