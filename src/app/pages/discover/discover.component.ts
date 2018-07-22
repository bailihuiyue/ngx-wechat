import { Component, OnInit, Inject } from '@angular/core';
import { rightInLeftLeave } from '../../anim/translateX';
import { Router } from '@angular/router';
@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.scss'],
  animations: [rightInLeftLeave],
  host: { '[@rightInLeftLeave]': '' }
})
export class DiscoverComponent implements OnInit {

  constructor(@Inject('BASE_CONFIG') private config,private router: Router) { }
  imgBaseUrl: string = "";
  ngOnInit() {
    this.imgBaseUrl = this.config.imgBaseUrl;
  }

  grey(e) {
    if (e.target.className.indexOf("section") >= 0) {
      e.target.style.backgroundColor = "#E2E2E2";
    }
    if(e.target.className.indexOf("pengyouquan") >= 0){
      this.router.navigateByUrl('/moments/me/好命先生/me.jpg');
    }
  }
  normal(e) {
    if (e.target.className.indexOf("section") >= 0) {
      e.target.style.backgroundColor = "#FFFFFF";
    }
  }
}
