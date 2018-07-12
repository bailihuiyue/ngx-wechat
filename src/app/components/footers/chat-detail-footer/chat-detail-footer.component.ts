import { Component, OnInit, HostListener, ElementRef, ViewChild } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-chat-detail-footer',
  templateUrl: './chat-detail-footer.component.html',
  styleUrls: ['./chat-detail-footer.component.scss']
})
export class ChatDetailFooterComponent implements OnInit {

  constructor() { }
  @HostListener('touchstart', ['$event.target']) touchstart(btn) {
    $(btn).parent(".voice,.more,.face").css("background-color", "#E2E2E2");
    if ($(btn).hasClass("talk")) {
      $(btn).css("background-color", "#E2E2E2").text("松开 结束");
      this.showMicroPhone = true;
    }
  }
  @HostListener('touchend', ['$event.target']) touchend(btn) {
    $(btn).parent(".voice,.more,.face").css("background-color", "transparent");
    if ($(btn).hasClass("talk")) {
      $(btn).css("background-color", "transparent").text("按住 说话");
      this.showMicroPhone = false;
    }
  }

  //显示说话按钮
  isTalk: boolean = false;

  //显示说话时的效果(屏幕中间的话筒)
  showMicroPhone: boolean = false;
  voicePic: string = "voice";
  height: number = 0;

  //表情栏的显示与隐藏
  isShowEmoji: boolean = false;
  emojiPic: string = "face";

  //表情栏与更多栏的显示与隐藏
  showEmojiPanel: boolean = false;
  @ViewChild('txt') inputTxt: ElementRef;
  ngOnInit() {

    //动态调整文字输入的长度,应该使用ElementRef,图省事,无耻的使用了jquery
    //减去其他三个按钮的大小
    $("#footerIpt,#talk-wrap").width($("body").width() - 50 - 55 - 45);

    //表情图片的宽与长的比率
    let rate = 0.7456;
    let width = $("body").width();
    this.height = width * rate;
  }

  changeTxt() {
    this.isTalk = !this.isTalk;
    if (this.isTalk) {
      this.voicePic = "keyboard";
    } else {
      this.voicePic = "voice";
      //TODO:problem:不能获取焦点,不知道原因
      this.inputTxt.nativeElement.focus();
    }
  }

  //TODO:表情到键盘的按钮切换有点不协调是因为没有找到不带圆圈的笑脸表情图片
  showEmoji() {
    this.showEmojiPanel = true;
    this.isShowEmoji = !this.isShowEmoji;
    if (this.isShowEmoji) {
      this.emojiPic = "keyboard";
      $(".face").addClass("face-keyboard-border");
      //TODO:angular 动画不知道如何传参,只能用jq了
      $(".body,.chat-detail-footer").animate({ "bottom": +this.height + "px" });
      $(".lazy").animate({ "top": $("app-chat-detail").height() - this.height + "px" });
    } else {
      this.emojiPic = "face";
      $(".face").removeClass("face-keyboard-border");
      $(".body,.chat-detail-footer").animate({ "bottom": "0px" });
      $(".lazy").animate({ "top": "100%" })
    }
  }

  showMore() {
    this.showEmojiPanel = false;
    $(".body,.chat-detail-footer").animate({ "bottom": +this.height + "px" });
    $(".more-panel").animate({ "top": $("app-chat-detail").height() - this.height + "px" });
  }
}
