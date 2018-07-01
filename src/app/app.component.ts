import { Component } from '@angular/core';
// import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
// import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  // constructor(
  //   private router: Router,
  //   private activatedRoute: ActivatedRoute
  // ) { }
  //ngOnInit() {
    //记录路由历史记录,等价于window.history,故使用原生js
    // this.router.events.pipe(
    //   filter((event) => event instanceof NavigationEnd)
    // ).subscribe((event: NavigationEnd) => {
    //   console.log(event);
    // });
  //}
}
