import { Component, OnInit } from '@angular/core';
import {UserRoleService} from "../user-role.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public userRoleService: UserRoleService ,public router : Router) { }

  ngOnInit() {
  }
  onReserch(){
  this.router.navigate(["list"])
  }

}
