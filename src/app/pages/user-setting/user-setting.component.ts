import { Component, OnInit, Inject } from '@angular/core';
import { leftInRightLeave } from '../../anim/translateX';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-user-setting',
  templateUrl: './user-setting.component.html',
  styleUrls: ['./user-setting.component.scss'],
  animations: [leftInRightLeave],
  host: { '[@leftInRightLeave]': '' }
})
export class UserSettingComponent implements OnInit {

  imgBack: string = "./assets/images/headers/back.png";
  backHref: string = "back";
  constructor(@Inject('BASE_CONFIG') private config, private router: Router, private activatedRoute: ActivatedRoute) { }
  imgBaseUrl: string = "";

  id: string = "";
  name: string = "";
  avatar: string = "";
  ngOnInit() {
    this.imgBaseUrl = this.config.imgBaseUrl;
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.name = params['name'];
      this.avatar = params['avatar'];
    });
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
