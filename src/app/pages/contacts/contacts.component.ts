import { Component, OnInit, Inject } from '@angular/core';
import { leftInRightLeave } from '../../anim/translateX';
import { currentPageReducer, CurrentPage } from '../../redux/currentPage.redux';
import { ContactsService } from '../../services/contacts.service';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  animations: [leftInRightLeave],
  host: { '[@leftInRightLeave]': '' }
})
export class ContactsComponent implements OnInit {

  constructor(@Inject('BASE_CONFIG') private config, private contactsService$: ContactsService) { }
  contact: Array<any> = [];
  imgBaseUrl: string = "";
  anchors: Array<string> = [];
  letter: string = "";
  hideLetterMask: boolean = true;
  ngOnInit() {
    this.imgBaseUrl = this.config.imgBaseUrl;
    this.contactsService$.getUContact().subscribe(data => {
      this.contact = data;
    });

    for (var i = 0; i < 26; i++) {
      this.anchors.push(String.fromCharCode((65 + i)));
    }
  }

  grey(e) {
    e.target.style.backgroundColor = "#E2E2E2";
  }
  normal(e) {
    e.target.style.backgroundColor = "#FFFFFF";
  }

  showLetter(e) {
    e.currentTarget.style.backgroundColor = "#dedede";
    e.currentTarget.style.opacity = "0.8";
    this.letter = $(e.target).attr("name").replace("#", "");
    this.hideLetterMask=false;
  }

  moveTouchbar(e){
    //TODO:info:Touchmove获取当前触摸的Dom节点 百度查到的代码
    var touchedLocation = e.changedTouches[0];
    var realTarget = document.elementFromPoint(touchedLocation.clientX, touchedLocation.clientY); 
    this.scroll(realTarget);   
  }

  jumpToLetter(e) {
    //TODO:bug:应该用锚点实现,但是发现angular锚点和路由有冲突
    //目前没有谷歌到方法
    e.currentTarget.style.backgroundColor = "transparent";
    e.currentTarget.style.opacity = "1";
    this.hideLetterMask=true;
    this.scroll(e.target);
  }

  scroll(ele){
    if ($(ele).is("a")) {
      let letter = $(ele).attr("name").replace("#", "");
      this.letter=letter;
      if ($("#" + letter).length > 0) {
        let postion = $("#" + letter).position().top+$('.index-pages-content').scrollTop();
        $(".index-pages-content").scrollTop(postion);
      }
    }
  }
}
