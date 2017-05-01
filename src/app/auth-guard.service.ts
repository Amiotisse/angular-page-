import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {UserAuthService} from "./user-auth.service";

@Injectable()
export class AuthGuardService implements CanActivate{


  constructor(
    private authService : UserAuthService,
    private router : Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean
  {
    if (this.authService.isLogedIn()) return true;
    this.router.navigate(["/login"]);
    return false;
  }
}
