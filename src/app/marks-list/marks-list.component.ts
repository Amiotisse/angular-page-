import { Component, OnInit } from '@angular/core';
import {MarksService} from "../marks.service";
import {UserAuthService} from "../user-auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-marks-list',
  templateUrl: './marks-list.component.html',
  styleUrls: ['./marks-list.component.css']
})
export class MarksListComponent implements OnInit {

  constructor(
    private service : MarksService,
    private userAuth : UserAuthService,
    private router : Router
  ) { }

  ngOnInit() {
    this.service.getListTitles()
      .then((listsTitles : string[] ) => this.listsTitles = listsTitles);
  }

  listsTitles : string[] = [];

  onlogout(){
    this.userAuth.disconnect();
    this.router.navigate([""]);
  }
}
