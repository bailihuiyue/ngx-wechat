import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { currentPageReducer, CurrentPage } from '../../../redux/currentPage.redux';
import { Store } from '@ngrx/store';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-index-footer',
  templateUrl: './index-footer.component.html',
  styleUrls: ['./index-footer.component.scss']
})
export class IndexFooterComponent implements OnInit {
  indexPage: string = "";
  unread: number = 0;
  constructor(private store: Store<number>, private router: Router, private routeInfo: ActivatedRoute) { }

  ngOnInit() {
    let url = this.router.routerState.snapshot.url.split("/");
    this.indexPage = url[url.length - 1];
    this.unread = parseInt(localStorage.getItem("allUnread"));
  }

  showPage(page) {
    this.indexPage = page;
    this.router.navigate([page], { relativeTo: this.routeInfo })
  }
}
