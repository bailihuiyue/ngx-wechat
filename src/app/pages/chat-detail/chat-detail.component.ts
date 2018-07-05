import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-detail',
  templateUrl: './chat-detail.component.html',
  styleUrls: ['./chat-detail.component.scss']
})
export class ChatDetailComponent implements OnInit {

  constructor() { }
  imgBack:string="../../../assets/images/headers/back.png";
  backHref:string="back";

  imgMore:string="../../../assets/images/headers/more.png";
  hrefMore:string="/more";
  styleMore={'position':'absolute','top':'0','right':'0px'};
  ngOnInit() {
  }

}
