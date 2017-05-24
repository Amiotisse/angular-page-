import { BrowserModule } from '@angular/platform-browser';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule, MdTooltipModule} from '@angular/material';
import {MdTabsModule} from '@angular/material';
import {MdMenuModule} from '@angular/material';
import {MdInputModule} from '@angular/material';
import {MdToolbarModule} from '@angular/material';
import {MdIconModule} from '@angular/material';
import {MdCardModule} from '@angular/material';
import {MdDialogModule} from '@angular/material';
import {MdSnackBarModule} from '@angular/material';
import {MdButtonToggleModule} from '@angular/material';
import {MdGridListModule} from '@angular/material';
import {MdSelectModule} from '@angular/material';
import {MdProgressBarModule} from '@angular/material';


import { AppComponent } from './app.component';
import { AddModuleComponent } from './add-module/add-module.component';
import { routes } from "./app.route";
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { NotImplYetComponent } from './not-impl-yet/not-impl-yet.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { UserRoleService } from "./user-role.service";
import { UserAuthService } from "./user-auth.service";
import { DeleteModuleComponent } from './delete-module/delete-module.component';
import { ErrorDisplayerComponent } from './error-displayer/error-displayer.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileService } from "./profile.service";
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import {AuthGuardService} from "./auth-guard.service";
import {PublicGuardService} from "./public-guard.service";
import { MarksComponent } from './marks/marks.component';
import {MarksTableComponent} from "./marks/marks-table/marks-table.component";
import {MarksRowDisplayComponent} from "./marks/marks-row-display/marks-row-display.component";
import { MarksPublishComponent } from './marks-publish/marks-publish.component';
import {MarksService} from "./marks.service";
import { MarksResultComponent } from './marks-result/marks-result.component';
import {ResearchBarServiceService} from "./research-bar-service.service";
import { ModuleComponent } from './module/module.component';
import { ModuleTableComponent } from './module/module-table/module-table.component';
import { ModuleRowDisplayComponent } from './module/module-row-display/module-row-display.component';
import {StudentService} from "./student.service";
import { StudentListComponent } from './student-list/student-list.component';
import { StudentListAddComponent } from './student-list-add/student-list-add.component';
import { StudentlistRowDisplayComponent } from './student-list-add/studentlist-row-display/studentlist-row-display.component';
import { StudentTableComponent } from './student-list-add/student-table/student-table.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SignupComponent,
    NotImplYetComponent,
    WelcomeComponent,
    ErrorDisplayerComponent,
    ProfileComponent,
    WorkspaceComponent,
    ProfileSettingsComponent,
    AddModuleComponent,
    DeleteModuleComponent,
    MarksComponent,
    MarksTableComponent,
    MarksRowDisplayComponent,
    MarksPublishComponent,
    MarksResultComponent,
    ModuleComponent,
    ModuleTableComponent,
    ModuleRowDisplayComponent,
    StudentListComponent,
    StudentListAddComponent,
    StudentlistRowDisplayComponent,
    StudentTableComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    routes,
    BrowserAnimationsModule,
    MdButtonModule,
    MdTabsModule,
    MdInputModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule,
    MdCardModule,
    MdDialogModule,
    MdSnackBarModule,
    MdButtonToggleModule,
    MdGridListModule,
    MdTooltipModule,
    MdSelectModule,
    MdCheckboxModule,
    MdProgressBarModule,

  ],
  entryComponents: [
    ProfileSettingsComponent,
    AddModuleComponent,
    DeleteModuleComponent,
  ],
  providers: [
    UserRoleService,
    UserAuthService,
    ProfileService,
    AuthGuardService,
    PublicGuardService,
    MarksService,
    ResearchBarServiceService,
    StudentService,
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA,
  ],

  bootstrap: [AppComponent ]
})
export class AppModule { }
