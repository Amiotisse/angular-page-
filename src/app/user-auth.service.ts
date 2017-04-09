import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import 'rxjs/Rx';

import {LoginErrors} from "./login-errors";
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
  }).catch(
    (error : Response) => Observable.throw(LoginErrors [error.json().errorCode])
    );
  }


}
