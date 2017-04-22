import { Component, OnInit } from '@angular/core';
import {UserRoleService} from "../user-role.service";
import {NgForm, FormGroup, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']

})
export class SignupComponent implements OnInit {

  constructor( public userRoleService: UserRoleService) { }
  signupForm: FormGroup;
  usernameFormControl :FormControl;
  error: any[];

  ngOnInit() {
    this.usernameFormControl =new FormControl(
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
    this.signupForm.valueChanges.subscribe(
      (data)=>{
       // console.log(this.signupForm)

      }
    )
   // this.usernameFormControl
  }
  onSubmit(){
   console.log(this.usernameFormControl)
   //console.log(this.signupForm);
  }
}
