import { Component, OnInit } from '@angular/core';
import { indexMenuAnimation } from "../../../anim/indexMenu";
@Component({
  selector: 'app-index-menu',
  templateUrl: './index-menu.component.html',
  styleUrls: ['./index-menu.component.scss'],
  animations:[indexMenuAnimation]
})
export class IndexMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
   
  }

}
