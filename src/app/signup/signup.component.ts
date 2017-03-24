import { Component, OnInit } from '@angular/core';
import {UserRoleService} from "../user-role.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor( public userRoleService: UserRoleService) { }

  ngOnInit() {
  }

}
