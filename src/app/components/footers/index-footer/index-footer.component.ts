import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { currentPageReducer, CurrentPage } from '../../../redux/currentPage.redux';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-index-footer',
  templateUrl: './index-footer.component.html',
  styleUrls: ['./index-footer.component.scss']
})
export class IndexFooterComponent implements OnInit {
  indexPage:string="";
  constructor(private store: Store<number>) { }

  ngOnInit() {
    this.store.select('DisplayIndexMenuReducer').subscribe(data => this.indexPage = data);
  }

}
