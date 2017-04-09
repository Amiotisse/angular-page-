import { Component, OnInit } from '@angular/core';
import {UserRoleService} from "../user-role.service";
import {UserAuthService} from "../user-auth.service";
import {Router} from "@angular/router";

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

  errors : any [];

  ngOnInit() {
    this.errors = [] ;
  }
  username : string ;
  password : string;
  key(event : KeyboardEvent){
    if (event.keyCode == 13 ) this.login();
  }

  login(){
   /* console.log (this.username);
    console.log (this.password);*/
   this.errors = [] ;
   this.userAuthService
      .login(this.username,this.password)
      .subscribe(
        () => this.router.navigate(['/welcome']),
        (error) => {
          console.log(error);
          this.errors.push(error)
        }
      );
  }

}
