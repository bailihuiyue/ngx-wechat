import { Component, OnInit, HostBinding } from '@angular/core';
import { routeAnimation } from "../../anim/routeAnimation";

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.scss'],
  animations: [routeAnimation]
})
export class IndexPageComponent implements OnInit {

  @HostBinding('@routeAnim') routeAnim = "void";
  constructor() { }
  ngOnInit() {
  }

}
