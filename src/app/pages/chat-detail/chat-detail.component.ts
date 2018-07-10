import { Component, OnInit, HostBinding, Inject } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { leftInRightLeave } from '../../anim/translateX';
import { UsersService } from '../../services/get-users.service';
@Component({
  selector: 'app-chat-detail',
  templateUrl: './chat-detail.component.html',
  styleUrls: ['./chat-detail.component.scss'],
  animations: [leftInRightLeave],
  host: { '[@leftInRightLeave]': '' }
})
export class ChatDetailComponent implements OnInit {

  constructor(@Inject('BASE_CONFIG') private config, private activatedRoute: ActivatedRoute, private userService$: UsersService) { }
  imgBack: string = "../../../assets/images/headers/back.png";
  backHref: string = "/index";

  imgMore: string = "../../../assets/images/headers/more.png";
  hrefMore: string = "/more";
  styleMore = { 'position': 'absolute', 'top': '0', 'right': '0px' };

  id: string = "";
  uname: string = "";
  chatTime: Array<string> = [];
  chatBody: Array<any> = [];
  friendAvatar: string = "";
  imgUrl:string="";
  ngOnInit() {
    this.imgUrl=this.config.imgUrl;
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.uname = params['uname'];
      this.friendAvatar = params['avatar'];
      //userService取值为异步取值,所以在这行下面写log()打印出来的只能是undefined
      this.userService$.getChatDetail().subscribe(data => {
        let chatDetail: object = {};
        if (data[this.id]) {
          chatDetail = data[this.id];
        } else {
          chatDetail = data['default'];
        }
        for (let chat in chatDetail) {
          //TODO:info:对应没有时间的聊天内容
          if(!data['default']){
            this.chatTime.push(chat);
          }
          this.chatBody.push(chatDetail[chat]);
        }
        //console.log(this.chatDetail);
      });
    });
  }

  isImg(txt){
    if(txt.indexOf(".gif")>0){
      return true;
    }else{
      return false;
    }
  }
}
