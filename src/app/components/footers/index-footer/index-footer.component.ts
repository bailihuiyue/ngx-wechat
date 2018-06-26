import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {currentPageReducer, CurrentPage} from '../../../redux/currentPage.redux';

@Component({
  selector: 'app-index-footer',
  templateUrl: './index-footer.component.html',
  styleUrls: ['./index-footer.component.scss']
})
export class IndexFooterComponent implements OnInit {

  indexPage:string="";
  currentPage$:Observable<string>;
  constructor(private routeInfo:ActivatedRoute,private store: Store<number>) { }

  ngOnInit() {
    this.indexPage = this.routeInfo.snapshot["data"]["state"];
    this.currentPage$ = this.store.select('currentPageReducer');
    this.store.dispatch({ type: this.indexPage});
  }

}
