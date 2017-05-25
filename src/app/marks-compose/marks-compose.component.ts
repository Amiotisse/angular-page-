import { Component, OnInit } from '@angular/core';
import {MarksService} from "../marks.service";
import {UserAuthService} from "../user-auth.service";
import {Router} from "@angular/router";
import {TitleCoef} from "../app.types";


@Component({
  selector: 'app-marks-compose',
  templateUrl: './marks-compose.component.html',
  styleUrls: ['./marks-compose.component.css']
})
export class MarksComposeComponent implements OnInit {

  constructor(
    private service : MarksService,
    private userAuth : UserAuthService,
    private router : Router
  ){}

  title:string = "";
  markListTitles : string[]= [];

  compo : TitleCoef[] = [];

  ngOnInit() {
    this.service.getListTitles()
      .then((listsTitles : string[] ) => this.markListTitles = listsTitles);
  }

  titleSelected : string ;
  coef : number ;

  addList(){
    let titleCoef : TitleCoef = {
        markListTitle : this.titleSelected,
        coef : this.coef
      };
    this.compo.push(titleCoef);
    console.log(this.compo);
  }

  publish (){
    this.service.publishCompsition(this.title , this.compo)
      .then( () => this.router.navigate(["/markList"]))
  }
  onlogout(){
    this.userAuth.disconnect();
    this.router.navigate([""]);
  }
}
