import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class UserAuthService {

  constructor( private http : Http ) {}
  login(username :string , password : string){
    let body ={
        app_name:  "ubsunu",
        user_name: username,
        password:  password,
    };
  return this.http.post("localhost:8080/token",body);
  }


}
