import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {routes} from "./app.route";
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { NotImplYetComponent } from './not-impl-yet/not-impl-yet.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {UserRoleService} from "./user-role.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SignupComponent,
    NotImplYetComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes,
  ],
  providers: [ UserRoleService],
  bootstrap: [AppComponent ]
})
export class AppModule { }
