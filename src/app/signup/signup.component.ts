import { Component, OnInit } from '@angular/core';
import {UserRoleService} from "../user-role.service";
import {NgForm, FormGroup, FormControl, Validators} from "@angular/forms";
import {ProfileService} from "../profile.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']

})
export class SignupComponent implements OnInit {

  constructor( public userRoleService: UserRoleService ,
               private profilService : ProfileService ,
               private router: Router ) { }
  signupForm: FormGroup;
  usernameFormControl :FormControl;
  errors: any[];

  ngOnInit() {
    this.usernameFormControl = new FormControl(
      null,
      [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(10)
      ]
    );
  this.signupForm= new FormGroup({
    'username': this.usernameFormControl,
    'name': new FormControl(null,Validators.required),
    'email': new FormControl(null, [Validators.required,Validators.email]),
    'firstname': new FormControl(null,Validators.required),
    'etablish': new FormControl(null,Validators.required),
    'rol_call': new FormControl('teacher',Validators.required),
    'password': new FormControl(null,Validators.required),
    'confirm_password': new FormControl(null,Validators.required),
  });
  }
  onSubmit(){
    console.log(this.signupForm.value)
   this.profilService.signup(
     this.signupForm.value.username,
     this.signupForm.value.name,
     this.signupForm.value.email,
     this.signupForm.value.firstname,
     this.signupForm.value.etablish,
     this.signupForm.value.rol_call.value,
     this.signupForm.value.password,
     ""
   ).then(() => this.router.navigate(['/profile']))
      .catch((error) => {
        console.log(error);
        this.errors.push(error);
      });
  }


}

