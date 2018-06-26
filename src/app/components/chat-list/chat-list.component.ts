import { Component, OnInit,HostBinding } from '@angular/core';
import { usersService } from '../../services/get-users.service';
import { Observable } from 'rxjs';
import { routeAnimation } from "../../anim/routeAnimation";

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss'],
  animations: [routeAnimation]
})
export class ChatListComponent implements OnInit {

  userList$:Observable<any> ;
  constructor(private usersService$: usersService) { }

  ngOnInit() {
    this.userList$ = this.usersService$.getUsers()
  }
}
