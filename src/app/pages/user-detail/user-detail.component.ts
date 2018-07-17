import { Component, OnInit, HostBinding, Inject } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { leftInRightLeave } from '../../anim/translateX';
import { UsersService } from '../../services/get-users.service';
@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  constructor(@Inject('BASE_CONFIG') private config, private activatedRoute: ActivatedRoute, private userService$: UsersService) { }
 
  id: string = "";
  name: string = "";
  avatar: string = "";
  imgUrl:string="";
  ngOnInit() {
    this.imgUrl=this.config.imgUrl;
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.name = params['name'];
      this.avatar = params['avatar'];
      //userService取值为异步取值,所以在这行下面写log()打印出来的只能是undefined
      this.userService$.getUserDetail().subscribe(data => {
        let userDetail: object = {};
        if (data[this.id]) {
          userDetail = data[this.id];
        } else {
          userDetail = data['default'];
        }
      });
    });
  }

}
