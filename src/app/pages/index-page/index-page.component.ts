import { Component, OnInit, HostBinding } from '@angular/core';
import { horLeft } from '../../anim/horScroll';
import { ActivatedRoute, Route ,Router} from '@angular/router';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.scss'],
  //animations: [horLeft],
  //host: { '[@horRight]': '' }
})
export class IndexPageComponent implements OnInit {

  //()里面的是trigger名,引入的是方法名
  //   @HostBinding('@horLeft') get chat() {
  //     return 'void';
  //  }
  indexPage: string = "";
  constructor(private router: Router,private routeInfo: ActivatedRoute, private store: Store<number>) { }
  ngOnInit() {
    this.routeInfo.url.subscribe(() => {
      this.indexPage = this.routeInfo.snapshot.firstChild.data.state;
      this.store.dispatch({ type: this.indexPage });
     });
  }
}
