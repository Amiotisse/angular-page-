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
import {MarksPublishComponent} from "./marks-publish/marks-publish.component";
import {MarksResultComponent} from "./marks-result/marks-result.component";
import {ModuleComponent} from "./module/module.component";
import {MarksComponent} from "./marks/marks.component";
import {StudentListComponent} from "./student-list/student-list.component";
import {StudentListAddComponent} from "./student-list-add/student-list-add.component";
import {MarksListComponent} from "./marks-list/marks-list.component";
import {MarksComposeComponent} from "./marks-compose/marks-compose.component";

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
    {
      path :'marks/:title',
      component : MarksPublishComponent,
    },
    {
      path : 'list',
      component : MarksResultComponent
    },
    {
      path : 'module',
      component : ModuleComponent,
      canActivate : [AuthGuardService],
    },
    {
      path :'mark',
      component : MarksComponent,
      canActivate: [AuthGuardService],
    },
    {
      path :'mark/:title',
      component : MarksComponent,
      canActivate: [AuthGuardService],
    },
    {
      path :'studentList',
      component : StudentListComponent,
      canActivate: [AuthGuardService],
    },
    {
      path :'markList',
      component : MarksListComponent,
      canActivate: [AuthGuardService],
    },
    {
      path :'markCompose',
      component : MarksComposeComponent,
      canActivate: [AuthGuardService],
    },
    {
      path :'studentListAdd',
      component : StudentListAddComponent,
      canActivate: [AuthGuardService],
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
      component: WorkspaceComponent,
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
