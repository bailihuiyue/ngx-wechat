import { Component, OnInit, HostBinding } from '@angular/core';
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

  constructor(private activatedRoute: ActivatedRoute, private userService$: UsersService) { }
  imgBack: string = "../../../assets/images/headers/back.png";
  backHref: string = "/index";

  imgMore: string = "../../../assets/images/headers/more.png";
  hrefMore: string = "/more";
  styleMore = { 'position': 'absolute', 'top': '0', 'right': '0px' };

  id: string = "";
  uname: string = "";
  chatDetail: object = {};
  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.uname = params['uname'];
      //userService取值为异步取值,所以在这行下面写log()打印出来的只能是undefined
      this.userService$.getChatDetail().subscribe(data => {
        if (data[this.id]) {
          this.chatDetail = data[this.id];
        } else {
          this.chatDetail = data['default'];
        }
        console.log(this.chatDetail);
      });
    });

  }

}
