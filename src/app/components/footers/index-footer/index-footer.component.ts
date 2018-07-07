import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { currentPageReducer, CurrentPage } from '../../../redux/currentPage.redux';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
@Component({
  selector: 'app-index-footer',
  templateUrl: './index-footer.component.html',
  styleUrls: ['./index-footer.component.scss']
})
export class IndexFooterComponent implements OnInit {
  indexPage: string = "";
  constructor(private store: Store<number>, private router: Router) { }

  ngOnInit() {
    let url = this.router.routerState.snapshot.url.split("/");
    this.indexPage = url[url.length - 1];
  }

  showPage(page) {
    
    this.indexPage = page;
    this.router.navigate(["/index/" + page]);
  }
}
