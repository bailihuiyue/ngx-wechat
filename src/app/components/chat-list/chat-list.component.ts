import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/get-users.service';
import { Observable } from 'rxjs';
import { horLeft, horRight,rightInLeftLeave } from '../../anim/translateX';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss'],
  animations: [rightInLeftLeave],
  host: { '[@rightInLeftLeave]': '' }
})
export class ChatListComponent implements OnInit {

  userList$: Observable<any>;
  constructor(private usersService$: UsersService) { }

  ngOnInit() {
    this.userList$ = this.usersService$.getUsers()
  }

  changeBackground(e) {
    e.currentTarget.style.backgroundColor = "#F0F0F0";
  }
  backgroundNormal(e) {
    e.currentTarget.style.backgroundColor = "#FFFFFF";
  }
}
