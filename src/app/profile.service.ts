import { Injectable } from '@angular/core';
import {UserAuthService} from "./user-auth.service";
import {Http , Headers , Response} from "@angular/http";
import {SignupErrors} from "./Errors";
import {Observable} from "rxjs";

@Injectable()
export class ProfileService {

  constructor( private http : Http, private userAuthService : UserAuthService ) { }

  public profile : any;


  getProfile(){
    let headers : Headers = new Headers();
    this.userAuthService.appendAuthHeader(headers);
    return this.http.get("/api/ubsunu-profile/profile" , { headers : headers })
      .map((res : Response) => {
        this.profile = res.json() ;
        return this.profile
      })
      .toPromise();
  }
  signup(
    userName :string ,
    lastName: string ,
    email:string,
    firstName: string ,
    organisation:string,
    userType : string,
    password : string ,
    birthDay: string,




  ){

    let body ={

      appName: "ubsunu",
      userName: userName,
      password: password,
      userType: userType,
      firstName: firstName,
      lastName: lastName,
      birthDay: birthDay,
      email: email,
      organisation: organisation
    };
    return this.http.post("api/ubsunu-profile/subscribe",body)
      .map( (response : Response ) =>{
        this.profile= response.json();
      })
      .catch(
        (error : Response) => Observable.throw(SignupErrors [error.json().errorCode])
      ).toPromise().then(()=>console.log(this.profile));
  }
}
