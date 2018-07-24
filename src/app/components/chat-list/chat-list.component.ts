import { Component, OnInit, Inject } from '@angular/core';
import { UsersService } from '../../services/get-users.service';
import { Observable } from 'rxjs';
import { horLeft, horRight, rightInLeftLeave } from '../../anim/translateX';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss'],
  animations: [rightInLeftLeave],
  host: { '[@rightInLeftLeave]': '' }
})
export class ChatListComponent implements OnInit {

  userList: Array<any>;
  imgUrl: string = "";
  constructor(@Inject('BASE_CONFIG') private config, private usersService$: UsersService) { }

  ngOnInit() {
    this.imgUrl = this.config.imgUrl;
    //TODO:info:如果只是取数据的话在模板页面使用| async管道也是可以的
    let zhidingList = localStorage.getItem("zhiding");
    let miandaraoList = localStorage.getItem("miandarao");
    this.usersService$.getUsers().subscribe(data => {
      let zhidingArr = [];
      let nozhidingArr = [];
      //计算出所有的未读消息数用于底部按钮显示
      let allUnread = 0;
      //要消除的未读id
      let delUnread = localStorage.getItem("unread");
      for (let user of data) {
        if (delUnread && delUnread.indexOf(user.id) >= 0) {
          user.unread = 0;
        }
        //开启置顶的用户列表
        if (zhidingList && zhidingList.indexOf(user.id) >= 0) {
          user.zhiding = true;
          zhidingArr.push(user);
        } else {
          nozhidingArr.push(user);
        }
        //开启免打扰的用户列表
        if (miandaraoList && miandaraoList.indexOf(user.id) >= 0) {
          user.miandarao = true;
        }
        if (user.unread > 0 && !user.miandarao) {
          allUnread += user.unread;
        }
      }
      if (allUnread > 0) {
        //懒得使用jquery进行redux通知了,使用jquery直接操作dom
        $(".unread-tip").css("display", "block").text(allUnread);
        localStorage.setItem("allUnread",allUnread.toString());
      }
      this.userList = zhidingArr.concat(nozhidingArr);
    });
  }

  changeBackground(e) {
    e.currentTarget.style.backgroundColor = "#D8D8D8";
  }
  backgroundNormal(e) {
    e.currentTarget.style.backgroundColor = "transparent";
  }

  //object 按照指定字段排序~~来自万能的百度
}
