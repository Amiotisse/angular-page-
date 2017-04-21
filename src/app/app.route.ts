import {Routes, RouterModule} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {ModuleWithProviders} from "@angular/core";
import {HomeComponent} from "./home/home.component";
import {SignupComponent} from "./signup/signup.component";
import {WelcomeComponent} from "./welcome/welcome.component";
import {NotImplYetComponent} from "./not-impl-yet/not-impl-yet.component";
import {ProfilComponent} from "./profil/profil.component";

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
    {
      path :'welcome',
      component : WelcomeComponent
    },
    {
      path: 'profil',
      component: ProfilComponent
    },
    {
      path:'in-progress',
      component: NotImplYetComponent
    }
  ];

export const routes : ModuleWithProviders = RouterModule.forRoot(app_routes);
