import { Component, OnInit } from '@angular/core';
import {MdButtonToggleChange} from "@angular/material";
import {Router} from "@angular/router";
import {UserAuthService} from "../user-auth.service";
import {ProfileService} from "../profile.service";

@Component({
  selector: 'app-marks',
  templateUrl: './marks.component.html',
  styleUrls: ['./marks.component.css']
})
export class MarksComponent implements OnInit {

  constructor(
    public profileService : ProfileService,
    public userauth :UserAuthService,
    public router : Router
  ) { }

  ngOnInit() {
  }
  onSelect(e:MdButtonToggleChange){
    console.log(e.value);
  }
  onlogout(){
    this.userauth.disconnect();
    this.router.navigate([""]);
  }



}
