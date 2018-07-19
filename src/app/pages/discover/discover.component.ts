import { Component, OnInit, Inject } from '@angular/core';
import { rightInLeftLeave } from '../../anim/translateX';
@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.scss'],
  animations: [rightInLeftLeave],
  host: { '[@rightInLeftLeave]': '' }
})
export class DiscoverComponent implements OnInit {

  constructor(@Inject('BASE_CONFIG') private config) { }
  imgBaseUrl: string = "";
  ngOnInit() {
    this.imgBaseUrl = this.config.imgBaseUrl;
  }

  grey(e) {
    if (e.target.className.indexOf("section") >= 0) {
      e.target.style.backgroundColor = "#E2E2E2";
    }
  }
  normal(e) {
    if (e.target.className.indexOf("section") >= 0) {
      e.target.style.backgroundColor = "#FFFFFF";
    }
  }
}
