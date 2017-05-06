import { Component, OnInit } from '@angular/core';
import {MdButtonToggleChange} from "@angular/material";

@Component({
  selector: 'app-marks',
  templateUrl: './marks.component.html',
  styleUrls: ['./marks.component.css']
})
export class MarksComponent implements OnInit {

  constructor() { }

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
