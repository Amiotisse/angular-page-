import { Component, OnInit } from '@angular/core';
import {UserRoleService} from "../user-role.service";

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( public userRoleService: UserRoleService) { }

  ngOnInit() {
  }

}
