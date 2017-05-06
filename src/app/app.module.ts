import { BrowserModule } from '@angular/platform-browser';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';
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
import {MarksRowInputComponent} from "./marks/marks-row-input/marks-row-input.component";


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
    MarksRowInputComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    routes,
    BrowserAnimationsModule,
    MdButtonModule, MdCheckboxModule,
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
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA,
  ],

  bootstrap: [AppComponent ]
})
export class AppModule { }
