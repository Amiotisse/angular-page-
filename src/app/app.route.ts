import {Routes, RouterModule} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {ModuleWithProviders} from "@angular/core";
import {HomeComponent} from "./home/home.component";
import {SignupComponent} from "./signup/signup.component";
import {WelcomeComponent} from "./welcome/welcome.component";
import {NotImplYetComponent} from "./not-impl-yet/not-impl-yet.component";
import {ProfileComponent} from "./profile/profile.component";
import {WorkspaceComponent} from "./workspace/workspace.component";
import {ProfileSettingsComponent} from "./profile-settings/profile-settings.component";
import {AddModuleComponent} from "./add-module/add-module.component";
import {AuthGuardService} from "./auth-guard.service";
import {PublicGuardService} from "./public-guard.service";

const app_routes : Routes  =
  [
    {
      path : '' ,
      component : HomeComponent,
      canActivate: [PublicGuardService],
    },
    {
      path : 'login' ,
      component : LoginComponent,
      canActivate: [PublicGuardService],
    },
    {
      path : 'signup' ,
      component : SignupComponent,
      canActivate: [PublicGuardService],

    },
    {
      path :'welcome',
      component : WelcomeComponent,
      canActivate : [AuthGuardService],

    },
    /*{
      path: 'profile',
      component: ProfileComponent
    },
    {
      path :'add-module',
      component: AddModuleComponent
    },
    {
      path: 'profile-settings',
      component: ProfileSettingsComponent
    },
    {
      path: 'workspace',
      component: WorkspaceComponent
    },*/
    {
      path:'in-progress',
      component: NotImplYetComponent
    },
    {
      path : '**' ,
      redirectTo:'/',
    },
  ];

export const routes : ModuleWithProviders = RouterModule.forRoot(app_routes);
