import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { fadeIn } from '../../anim/fade';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  animations: [fadeIn],
  host: { '[@fadeIn]': '' }
})
export class SearchComponent implements OnInit {
  currentPage$:Observable<string>;

  constructor(private routeInfo:ActivatedRoute,private store: Store<number>) { }

  ngOnInit() {
    //TODO:检测redux是否生效
    this.store.dispatch({ type: this.routeInfo.snapshot["data"]["state"]});
  }

  runBack(){
    window.history.back();
  }
  changeGrey(e){
    e.target.style.backgroundColor="#B6B6B6";
  }
  reset(){
    localStorage.removeItem("unread");
    localStorage.removeItem("zhiding");
    localStorage.removeItem("miandarao");
    $("input").css("color","red").val("所有操作已重置");
  }
}
