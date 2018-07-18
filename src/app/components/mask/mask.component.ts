import { Component, OnInit, Input, Inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { maskStatus } from '../../redux/mask.redux';
import { maskFade } from '../../anim/fade';
import { sildeUp } from '../../anim/translateY';
@Component({
  selector: 'app-mask',
  templateUrl: './mask.component.html',
  styleUrls: ['./mask.component.scss'],
  //忘记加这句话会报错 Please include either "BrowserAnimationsModule" or "NoopAnimationsModule" in your application.
  animations: [maskFade, sildeUp]
})
export class MaskComponent implements OnInit {

  @Input()
  maskMenuName: string;
  maskData: any;
  maskHidden: boolean;
  imgBaseUrl:string="";
  constructor(@Inject('BASE_CONFIG') private config, private store: Store<number>) { }
  //imgRedEnvelope
  ngOnInit() {
    this.imgBaseUrl=this.config.imgBaseUrl;
    //使用juqery获取dom来判断当前页面类型,达到快速获取状态的效果,也可使用redux完成同样功能
    if ($(".red-envelope-body").length > 0) {
      this.maskData = [
        ["红包记录"],
        ["帮助中心"]
      ];
    }else if($(".user-detail-body").length > 0){
      this.maskData = [
        ["设置备注及标签","beizhu"],
        ["标星朋友","xing"],
        ["设置朋友圈权限","pengyouquan"],
        ["发送该名片","fasong"],
        ["投诉","tousu"],
        ["加入黑名单","heimingdan"],
        ["删除","shanchu"],
        ["添加到桌面","tianjia"],
      ];
    }
    //初始化redux值
    this.store.dispatch({ type: maskStatus.Hide });
    this.store.select('maskStatusReducer').subscribe(data => this.maskHidden = data);
  }
  hideMask(e) {
    this.store.dispatch({ type: maskStatus.Hide });
    //用来阻止冒泡
    this.stopPropagation(e);
  }

  //TODO:warning:代码重复,可重构
  touched(e) {
    e.currentTarget.style.backgroundColor = "#F0F0F0";
    this.stopPropagation(e);
  }
  normal(e) {
    e.currentTarget.style.backgroundColor = "#fff";
    this.stopPropagation(e);
    alert("敬请期待");
  }

  stopPropagation(e) {
    e.stopPropagation();
    e.preventDefault();
  }
}
