import { Component, OnInit } from '@angular/core';
import {MarksService} from "../marks.service";
import {UserAuthService} from "../user-auth.service";
import {Router} from "@angular/router";
import {TitleCoef} from "../app.types";
import {NgForm} from "@angular/forms";

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

  addList(f: NgForm){
    const value =f.value;
    let titleCoef : TitleCoef = {
        markListTitle : value.title,
        coef : value.coef
      };
    this.compo.push(titleCoef);
    f.reset();
    console.log(this.compo);
  }
  onlogout(){
    this.userAuth.disconnect();
    this.router.navigate([""]);
  }
}
