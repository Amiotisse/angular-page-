import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import 'rxjs/Rx';

import {LoginError} from "./login-error.enum";
import {Observable} from "rxjs";
@Injectable()
export class UserAuthService {

  constructor( private http : Http ) {}
    token : string ;
  login(username :string , password : string){
    let body ={
        app_name:  "ubsunu",
        user_name: username,
        password:  password,
    };
  return this.http.post("api/alphau/token",body)
    .map( (response : Response ) =>{
    this.token= response.text();
  }).catch((error : Response) => {

      let login_error : LoginError = null ;
      if (error.status==404) login_error= LoginError.User_Not_Found;
      else if (error.status==400) login_error= LoginError.Invalid_Password;
      return Observable.throw(login_error);

    }) ;
  }


}
