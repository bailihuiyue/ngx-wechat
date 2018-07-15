import { Component, OnInit, HostListener, ElementRef, ViewChild } from '@angular/core';
import * as $ from 'jquery';
//取消angular对html转义
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-chat-detail-footer',
  templateUrl: './chat-detail-footer.component.html',
  styleUrls: ['./chat-detail-footer.component.scss']
})
export class ChatDetailFooterComponent implements OnInit {

  constructor(public sanitizer: DomSanitizer) { }
  @HostListener('touchstart', ['$event.target']) touchstart(btn) {
    //委托一时爽,但是要排除父元素
    if (!$(btn).is(".more-panel,.panel-container,.chat-detail-footer,.text,.box,input")) {
      $(btn).css("background-color", "#E2E2E2");
      if ($(btn).hasClass("talk")) {
        $(btn).css("background-color", "#E2E2E2").text("松开 结束");
        this.showMicroPhone = true;
      }
    }
  }
  @HostListener('touchend', ['$event.target']) touchend(btn) {
    if (!$(btn).is(".more-panel,.panel-container,.chat-detail-footer,.text,.box,input")) {
      //小按钮还原回的颜色
      if ($(btn).parent().is(".chat-detail-footer")) {
        $(btn).css("background-color", "transparent");
      } else {//morePanel还原回的颜色
        $(btn).css("background-color", "#FCFCFC");
      }
    }
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
  emojiPic: string = "face";
  //控制更多按钮面的显示与隐藏
  showMorePanel: boolean = false;
  //表情栏与更多栏的显示与隐藏
  showEmojiPanel: boolean = false;
  //更多面板的按钮-第一页
  morePanelBtns: Array<Array<string>> = [
    ["xiangce", "相册"],
    ["paishe", "拍摄"],
    ["shipintonghua", "视频通话"],
    ["weizhi", "位置"],
    ["hongbao", "红包"],
    ["zhuanzhang", "转账"],
    ["yuyinshuru", "语音输入"],
    ["mingpian", "名片"],
    ["wodeshoucang", "我的收藏"],
    ["wenjian", "文件"]
  ];
  str: string = "";
  //从数据的角度解决bug001
  panelBtns: Array<Array<Array<string>>> = [];
  //更多面板的按钮-第二页
  morePanelBtns2: Array<Array<string>> = [];
  //body的宽度
  width:number=0;
  @ViewChild('txt') inputTxt: ElementRef;
  ngOnInit() {

    //动态调整文字输入的长度,应该使用ElementRef,图省事,无耻的使用了jquery
    //减去其他三个按钮的大小
    $("#footerIpt,#talk-wrap").width($("body").width() - 50 - 55 - 45);

    //表情图片的宽与长的比率
    let rate = 0.7456;
    this.width = $("body").width();
    this.height = this.width * rate;

    //解决bug001
    let count = 0,j=0;
    this.morePanelBtns.forEach((val, i) => {
      this.panelBtns[count] = this.panelBtns[count] || [];
      this.panelBtns[count][j] = this.panelBtns[count][j] || [];
      this.panelBtns[count][j].push(val[0], val[1]);
      j++;
      if ((i + 1) % 8 === 0) {
        count++;
        j=0;
      }
    });
  }

  //输入文字按钮
  changeTxt() {
    this.isTalk = !this.isTalk;
    if (this.isTalk) {
      this.voicePic = "keyboard";
    } else {
      this.voicePic = "voice";
      //TODO:problem:不能获取焦点,不知道原因
      this.inputTxt.nativeElement.focus();
    }

    //点击该按钮时隐藏所有面板
    this.closeAllPanel();
    this.showMorePanel = false;
    this.showEmojiPanel = false;
  }

  //TODO:表情到键盘的按钮切换有点不协调是因为没有找到不带圆圈的笑脸表情图片
  showEmoji() {
    this.showMorePanel = false;
    this.showEmojiPanel = !this.showEmojiPanel;
    if (this.showEmojiPanel) {
      this.emojiPic = "keyboard";
      $(".face").addClass("face-keyboard-border");
      //TODO:problem:angular 动画不知道如何传参,只能用jq了
      $(".body,.chat-detail-footer").animate({ "bottom": +this.height + "px" });
      $(".lazy").animate({ "top": $("app-chat-detail").height() - this.height + "px" });
    } else {
      this.emojiPic = "face";
      $(".face").removeClass("face-keyboard-border");
      if (this.showMorePanel && !this.showEmojiPanel) {
        this.showEmojiPanel = true;
      } else {
        this.closeAllPanel();
      }
    }
  }

  //显示 更多 面板
  showMore() {
    this.emojiPic = "face";
    $(".face").removeClass("face-keyboard-border");
    this.showEmojiPanel = false;
    this.showMorePanel = !this.showMorePanel;
    if (this.showMorePanel) {
      $(".body,.chat-detail-footer").animate({ "bottom": +this.height + "px" });
      $(".more-panel").animate({ "top": $("app-chat-detail").height() - this.height + "px" });
    } else {
      if (this.showEmojiPanel && !this.showMorePanel) {
        this.showMorePanel = true;
      } else {
        this.closeAllPanel();
      }
    }
  }

  //收起所有面板
  closeAllPanel() {
    $(".body,.chat-detail-footer").animate({ "bottom": "0" });
    $(".lazy,.more-panel").animate({ "top": "100%" });
  }

  //使用sanitizer,让angular信任html字符串,必须前台使用下面的属性绑定
  //[innerHTML]="boxContent()"
  //TODO:bug001:被angular接管的标签会生成<div _ngcontent-c3="" class="box">这样的东西
  //而使用sanitizer将会完全生成不被angular控制的html标签,从而导致css的失效
  //angular的标签都是box[_ngcontent-c3]这种的
  boxContent() {
    this.str = '';
    this.morePanelBtns.forEach((val, i, array) => {
      if (i % 8 === 0) {
        this.str += '<div class="panel-container clearfix" style="position:absolute;top:0;right:' + i / 8 + '00%">';
      }
      this.str += '<div class="box">' +
        '<img src="./assets/images/more-panel/' + val[0] + '.png" alt="">' +
        '<div class="text">' + val[1] + '</div>' +
        '</div>';
      if ((i + 1) % 8 === 0) {
        this.str += '</div>';
      }
    });
    return this.sanitizer.bypassSecurityTrustHtml(this.str);
  }
}
