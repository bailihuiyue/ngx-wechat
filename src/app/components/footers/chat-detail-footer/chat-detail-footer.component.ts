import { Component, OnInit, HostListener,ElementRef,ViewChild } from '@angular/core';

@Component({
  selector: 'app-chat-detail-footer',
  templateUrl: './chat-detail-footer.component.html',
  styleUrls: ['./chat-detail-footer.component.scss']
})
export class ChatDetailFooterComponent implements OnInit {

  constructor() { }
  @HostListener('touchstart', ['$event.target']) touchstart(btn) {
    $(btn).parent(".voice,.more,.face").css("background-color", "#F0F0F0");
    if ($(btn).hasClass("talk")) {
      $(btn).css("background-color", "#F0F0F0").text("松开 结束");
      this.showMicroPhone = true;
    }
  }
  @HostListener('touchend', ['$event.target']) touchend(btn) {
    $(btn).parent(".voice,.more,.face").css("background-color", "#FFFFFF");
    if ($(btn).hasClass("talk")) {
      $(btn).css("background-color", "#FFFFFF").text("按住 说话");
      this.showMicroPhone = false;
    }
  }

  //显示说话按钮
  isTalk: boolean = false;

  //显示说话时的效果(屏幕中间的话筒)
  showMicroPhone: boolean = false;
  pic:string="voice";
  @ViewChild('txt') inputTxt: ElementRef;
  ngOnInit() {

    //动态调整文字输入的长度,应该使用ElementRef,图省事,无耻的使用了jquery
    //减去其他三个按钮的大小
    $("#footerIpt,#talk-wrap").width($("body").width() - 50 - 55 - 45);
  }

  changeTxt() {
    this.isTalk = !this.isTalk;
    if(this.isTalk){
      this.pic="keyboard";
    }else{
      this.pic="voice";
      //TODO:problem:不能获取焦点,不知道原因
      this.inputTxt.nativeElement.focus();
    }  
  }
}
