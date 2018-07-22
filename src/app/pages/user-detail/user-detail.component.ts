import { Component, OnInit, HostBinding, Inject } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { leftInRightLeave } from '../../anim/translateX';
import { UsersService } from '../../services/get-users.service';
import { scaleTopLeftAnimation } from '../../anim/scale';
@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
  animations: [leftInRightLeave,scaleTopLeftAnimation],
  host: { '[@leftInRightLeave]': '' }
})
export class UserDetailComponent implements OnInit {

  constructor(@Inject('BASE_CONFIG') private config, private router: Router, private activatedRoute: ActivatedRoute, private userService$: UsersService) { }

  //app-header-button
  imgBack: string = "../../../assets/images/headers/back.png";
  backHref: string = "back";
  imgMore: string = "../../../assets/images/headers/more.png";
  hrefMore: string = "userDetailMore";
  styleMore = { 'position': 'absolute', 'top': '0', 'right': '0px' };


  id: string = "";
  name: string = "";
  avatar: string = "";
  imgUrl: string = "";

  imgBaseUrl: string;
  userDetail: object = {};
  //放大头像
  showAvatar: boolean = false;
  
  ngOnInit() {
    this.imgUrl = this.config.imgUrl;
    this.imgBaseUrl = this.config.imgBaseUrl;
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.name = params['name'];
      this.avatar = params['avatar'];
      //userService取值为异步取值,所以在这行下面写log()打印出来的只能是undefined
      this.userService$.getUserDetail().subscribe(data => {
        if (data[this.id]) {
          this.userDetail = data[this.id];
        } else {
          this.userDetail = data['default'];
        }
      });
    });
  }

  touched(e) {
    let ele = $(e.currentTarget), color, fontColor;
    if (ele.is(".album")) {
      color = "#F0F0F0";
    } else if (ele.is(".sendMsg")) {
      //TODO:info:a标签一般使用:active即可,可是chrome pc浏览器模拟时发现了延迟,故用js实现
      color = "#268609";
      fontColor = "#E2E2E2";
    } else if (ele.is(".call")) {
      color = "#E2E2E2";
      fontColor = "#878787";
    }
    $(ele).css({ "backgroundColor": color, "color": fontColor });
  }
  normal(e) {
    let ele = $(e.currentTarget), color, fontColor;
    if (ele.is(".album")) {
      color = "#FFFFFF";
      this.router.navigateByUrl("/moments/" + this.id+"/"+this.name+"/"+this.avatar);
    } else if (ele.is(".sendMsg")) {
      color = "#1AAC19";
      fontColor = "#fff";
      window.history.back();
    } else if (ele.is(".call")) {
      color = "#fff";
      fontColor = "#000";
      alert("敬请期待");
    }
    $(ele).css({ "backgroundColor": color, "color": fontColor });
  }

  showLargeAvatar() {
    this.showAvatar = true;
  }

  closeLargeAvatar() {
    this.showAvatar = false;
  }
}
