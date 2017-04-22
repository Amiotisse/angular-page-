import { Injectable } from '@angular/core';
import {UserAuthService} from "./user-auth.service";
import {Http , Headers , Response} from "@angular/http";

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
}
