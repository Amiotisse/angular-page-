import { Component, OnInit } from '@angular/core';
import {UserRoleService} from "../user-role.service";
import {UserAuthService} from "../user-auth.service";
import {Router} from "@angular/router";

import {LoginError} from "../login-error.enum";

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

  error : boolean;
  msgErr : string;

  ngOnInit() {
    this.error = false ;
  }
  username : string ;
  password : string;
  key(event : KeyboardEvent){
    if (event.keyCode == 13 ) this.login();
  }

  login(){
   /* console.log (this.username);
    console.log (this.password);*/
   this.error = false ;
    this.userAuthService
      .login(this.username,this.password)
      .subscribe(
        ()=>{
          this.router.navigate(['/welcome']);
        },
        (error : LoginError)=>{
           this.error = true ;
           if (error == LoginError.Invalid_Password) this.msgErr = "Invalide mot de passe";
           else if (error == LoginError.User_Not_Found) this.msgErr = "Pseudo introuvable";
        });
  }

}
