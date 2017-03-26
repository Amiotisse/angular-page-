import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import 'rxjs/Rx';
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
  return this.http.post("http://localhost:8080/token",body)
    .map( (response : Response ) =>{
    this.token= response.text();
  }) ;
  }


}
