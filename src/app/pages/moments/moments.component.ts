import { Component, OnInit,Inject } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { leftInRightLeave } from '../../anim/translateX';
import { MomentsService } from '../../services/moments.service';
@Component({
  selector: 'app-moments',
  templateUrl: './moments.component.html',
  styleUrls: ['./moments.component.scss'],
  animations: [leftInRightLeave],
  host: { '[@leftInRightLeave]': '' }
})
export class MomentsComponent implements OnInit {

  imgBack: string = "../../../assets/images/headers/back.png";
  backHref: string = "back";
  styleBack = { 'background-color': 'transparent','position': 'absolute', 'top': '0', 'left': '0' };
  imgCamera: string = "../../../assets/images/moments/camera.png";
  hrefCamera: string = "others";
  styleCamera = { 'position': 'absolute', 'top': '0', 'right': '0px' ,"background-color": "transparent"};

  id: string = "";
  name: string = "";
  avatar: string = "";
  imgUrl: string = "";

  imgBaseUrl: string;
  moments: object = {};
  constructor(@Inject('BASE_CONFIG') private config, private router: Router, private activatedRoute: ActivatedRoute, private momentsService$: MomentsService) { }

  ngOnInit() {
    this.imgBaseUrl = this.config.imgBaseUrl;
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.momentsService$.getMoments().subscribe(data => {
        if(data[this.id]==="me"){
          this.moments = data["me"];
        }else if (data[this.id]) {
          this.moments = data[this.id];
        } else {
          this.moments = data['other'];
          this.id = "other";
        }
      });
    });
  }
}
