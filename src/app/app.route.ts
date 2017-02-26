import {Routes, RouterModule} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {ModuleWithProviders} from "@angular/core";
import {HomeComponent} from "./home/home.component";
import {SignupComponent} from "./signup/signup.component";

const app_routes : Routes  =
  [
    {
      path : '' ,
      component : HomeComponent
    },
    {
      path : 'login' ,
      component : LoginComponent
    },
    {
      path : 'signup' ,
      component : SignupComponent

    },
  ];

export const routes : ModuleWithProviders = RouterModule.forRoot(app_routes);
