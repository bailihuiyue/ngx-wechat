import { Component, OnInit, Input } from '@angular/core';
import { changeCheckBoxStatus, changeCheckBoxBtnStatus } from '../../anim/translateX';
@Component({
  selector: 'app-chekbox',
  templateUrl: './chekbox.component.html',
  styleUrls: ['./chekbox.component.scss'],
  animations: [changeCheckBoxStatus, changeCheckBoxBtnStatus]
})
export class ChekboxComponent implements OnInit {

  constructor() { }
  triggerStr: string = "uncheck";
  @Input()
  operate: string = "";
  @Input()
  uid: string = "";
  ngOnInit() {
    //练习一下localStorage
    let userList = localStorage.getItem(this.operate);
    if (userList&&userList.indexOf(this.uid) >= 0) {
      this.triggerStr = "checked";
    }
  }

  changeStatus(e) {
    let userList = localStorage.getItem(this.operate);
    if (!userList) {
      userList = "";
    }
    let userArr = userList.split(";");
    let userTempArr = [];
    if (this.triggerStr === "checked") {
      this.triggerStr = "uncheck";
      for (let user of userArr) {
        if (user !== this.uid) {
          userTempArr.push(user);
        }
      }
      if (userTempArr.length > 0) {
        localStorage.setItem(this.operate, userTempArr.join(";"));
      }
    } else {
      this.triggerStr = "checked";
      if (userArr.indexOf(this.uid) < 0) {
        userList = this.uid + ";" + userList;
        localStorage.setItem(this.operate, userList);
      }
    }
  }
}
