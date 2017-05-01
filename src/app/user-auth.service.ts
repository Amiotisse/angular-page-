import { Injectable } from '@angular/core';
import {Headers, Http, Response} from "@angular/http";
import 'rxjs/Rx';

import {LoginErrors} from "./Errors";
import {Observable} from "rxjs";
@Injectable()
export class UserAuthService {

  constructor( private http : Http ) {
    this.token = null;
    this.getToken();
  }
  private tokenKey = "ubsunuToken";

  private token : string ;

  private setToken(token :string){
    this.token = token;
    localStorage.setItem( this.tokenKey , this.token);
  }

  private getToken (){
    if (this.token != null )return this.token;
    this.token = localStorage.getItem(this.tokenKey)
    return this.token;
  }

  login(username :string , password : string , userType:string){
    let body ={
        app_name:  "ubsunu",
        user_name: username,
        password:  password,
        userType:  userType,
    };
  return this.http.post("api/alphau/token",body)
    .map( (response : Response ) =>{
      this.setToken (response.text());
    })
    .catch(
    (error : Response) => Observable.throw(LoginErrors [error.json().errorCode])
    ).toPromise();
  }

  disconnect (){
    this.token = null;
    localStorage.removeItem(this.tokenKey);
  }
  isLogedIn(): boolean { return ! (this.getToken() == null) }

  appendAuthHeader(headers : Headers):void {
    headers.append("Authorization", "Bearer "+ this.getToken() );
  }
}
