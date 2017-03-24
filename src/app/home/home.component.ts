import { Component, OnInit } from '@angular/core';
import {UserRoleService} from "../user-role.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public userRoleService: UserRoleService ) { }

  ngOnInit() {
  }

}
