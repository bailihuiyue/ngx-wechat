import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-button',
  templateUrl: './header-button.component.html',
  styleUrls: ['./header-button.component.scss']
})
export class HeaderButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  changeBlack(e){
    e.target.style.backgroundColor="black";
  }
  changeNormal(e){
    e.target.style.backgroundColor="#1D1C1F";
  }
}
