import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-index-header',
  templateUrl: './index-header.component.html',
  styleUrls: ['./index-header.component.scss']
})
export class IndexHeaderComponent implements OnInit {

  constructor(private router: Router) { }
  
  is_index:Boolean=true;

  imgAdd:string="./assets/images/add.svg";
  addHref:string="showMenu";
  addStyle={'position':'absolute','top':'0','right':'0px'};
 

  imgSearch:string="./assets/images/find.svg";
  SearchHref:string="/search";
  SearchStyle={'position':'absolute','top':'0','right':'55px'};
  ngOnInit() {
  }
  changeBlack(e){
    e.target.style.backgroundColor="black";
  }
  changeNormal(e){
    e.target.style.backgroundColor="#1D1C1F";
  }
  showMenu(){
    if(this.is_index){
      this.router.navigateByUrl("/index/menu"); 
      this.is_index=false;
    }else{
      this.router.navigateByUrl("/index"); 
      this.is_index=true;
    }
  }
}
