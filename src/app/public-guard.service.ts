import { Injectable } from '@angular/core';
import {UserAuthService} from "./user-auth.service";
import {Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate} from "@angular/router";
import {Observable} from "rxjs";

@Injectable()
export class PublicGuardService implements CanActivate{

  constructor(
    private authService : UserAuthService,
    private router : Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean
  {
    if (! this.authService.isLogedIn())
      return true;
    this.router.navigate(["/welcome"]);
    return false;
  }

}
