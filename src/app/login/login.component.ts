import { Component, OnInit } from '@angular/core';
import {UserRoleService} from "../user-role.service";
import {UserAuthService} from "../user-auth.service";
import {Router} from "@angular/router";
import {error} from "util";

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    public userRoleService: UserRoleService ,
    private userAuthService: UserAuthService,
    private router: Router
  ) { }


  ngOnInit() {
  }
  username : string ;
  password : string;
  login(){
   /* console.log (this.username);
    console.log (this.password);*/
    this.userAuthService
      .login(this.username,this.password)
      .subscribe(()=>{
        this.router.navigate(['/welcome']);
      },
        (error)=>{
          console.log(error)
        });
  }

}
