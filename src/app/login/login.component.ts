import { Component, OnInit } from '@angular/core';
import {UserRoleService} from "../user-role.service";
import {UserAuthService} from "../user-auth.service";
import {Router} from "@angular/router";
import {ProfileService} from "../profile.service";

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    public userRoleService: UserRoleService ,
    private userAuthService: UserAuthService,
    private profileService: ProfileService,
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
     .then( ()=> this.profileService.getProfile())
     .then( (profile) => console.log(profile))
     .then(() => this.router.navigate(['/welcome']))
     .catch((error) => {
          console.log(error);
          this.errors.push(error);
     })
   ;
  }

}
