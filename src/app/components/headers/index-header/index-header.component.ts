import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index-header',
  templateUrl: './index-header.component.html',
  styleUrls: ['./index-header.component.scss']
})
export class IndexHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  changeBlack(e){
    e.target.style.backgroundColor="black";
  }
}
