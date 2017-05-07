import { Component, OnInit } from '@angular/core';
import {MdButtonToggleChange} from "@angular/material";
import {Router} from "@angular/router";
import {UserAuthService} from "../user-auth.service";
import {ProfileService} from "../profile.service";
import {NgForm} from "@angular/forms";

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



  addList(form: NgForm){
    const value =form.value;
    console.log(value);
    var
      mark:{ student:{lastName:string,firstName :string ,email: string },value : number } = {
      student: {
        lastName : value.lastName,
        firstName : value.firstName,
        email : value.email,
      },
      value : value.note
    };
  this.marksList.push(mark);


  }

  marksList :{ student:{lastName:string,firstName :string ,email: string },value : number }[] =
    [
      {
        student: {
          lastName : 'Himri',
          firstName : 'Nabil',
          email : 'Himri.nabil@gmail.com',
        },
        value : 20
      },
      {
        student: {
          lastName : 'Himri',
          firstName : 'Amina',
          email : 'Himri.amina@gmail.com',
        },
        value : 19
      }

    ] ;
}
