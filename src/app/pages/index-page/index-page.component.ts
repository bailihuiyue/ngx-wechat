import { Component, OnInit, HostBinding } from '@angular/core';
import { fadeIn } from '../../anim/fade';
import { ActivatedRoute, Route, Router, NavigationEnd } from '@angular/router';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.scss'],
  animations: [fadeIn],
  //TODO:不等价于在模板顶层元素中写[@horRight]=""
  //很多时候动画的enter方法可以出发但是leave却没有,这时就需要在host中写入动画了
  //host:的写法相当于在<app-index-page>中加入动画,否则切换路由时<app-index-page>
  //中的内容被直接抹掉,来不及执行动画就消失了,因此才会导致leave动画失效
  //host: { '[@horRight]': '' } 
})
export class IndexPageComponent implements OnInit {

  //()里面的是trigger名,引入的是方法名
  //   @HostBinding('@horLeft') get chat() {
  //     return 'void';
  //  }
  constructor(private router: Router, private routeInfo: ActivatedRoute, private store: Store<number>) {
    //index-page的全局路由
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // 每次路由跳转改变状态
      }
    });
  }
  ngOnInit() {
    //练习redux的代码,没什么用
    // this.store.select('currentPageReducer');
    // this.routeInfo.url.subscribe(() => {
    //   this.indexPage = this.routeInfo.snapshot.firstChild?this.routeInfo.snapshot.firstChild.data.state:"";
    //   this.store.dispatch({ type: this.indexPage });
    //   console.log(this.indexPage);
    //  });

  }
}