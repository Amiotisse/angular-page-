import { Injectable } from '@angular/core';
import {Headers, Http, Response} from "@angular/http";
import 'rxjs/Rx';

import {LoginErrors} from "./Errors";
import {Observable} from "rxjs";
@Injectable()
export class UserAuthService {

  constructor( private http : Http ) {
    this.token = null;
  }
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
    })
    .catch(
    (error : Response) => Observable.throw(LoginErrors [error.json().errorCode])
    ).toPromise();
  }

  isLogedIn(): boolean { return ! (this.token == null) }

  appendAuthHeader(headers : Headers):void {
    headers.append("Authorization", "Bearer "+ this.token );
  }
}
