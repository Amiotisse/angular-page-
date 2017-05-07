import {Component, OnInit, ViewChild} from '@angular/core';
import {MdButtonToggleChange} from "@angular/material";
import {Router} from "@angular/router";
import {UserAuthService} from "../user-auth.service";
import {ProfileService} from "../profile.service";
import {NgForm} from "@angular/forms";
import {Mark} from "../app.types";
import {MarksService} from "../marks.service";

@Component({
  selector: 'app-marks',
  templateUrl: './marks.component.html',
  styleUrls: ['./marks.component.css']
})
export class MarksComponent implements OnInit {

  constructor(
    public userAuth :UserAuthService,
    public router : Router,
    public marksService : MarksService
  ) { }

  ngOnInit() {
  }
  onSelect(e:MdButtonToggleChange){
    console.log(e.value);
  }
  onlogout(){
    this.userAuth.disconnect();
    this.router.navigate([""]);
  }


  onClear(form : NgForm){
    form.reset();
    console.log(form);

  }
  onPublish(){
    this.marksService.publish(this.title, this.marksList);
    this.title = "";
    this.marksList = [];
  }
  addList(form: NgForm){
    const value =form.value;

    var
      mark: Mark = {
        student: {
          lastName : value.lastName,
          firstName : value.firstName,
          email : value.email,
        },
        value : value.note
      };
    this.marksList.push(mark);
    form.reset();
    console.log(form);

  }
  title : string = "";
  marksList : Mark[] = [];

}
