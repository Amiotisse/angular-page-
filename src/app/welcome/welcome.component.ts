import { Component, OnInit } from '@angular/core';
import {ProfileService} from "../profile.service";
import {MdDialog} from "@angular/material";
import {ProfileSettingsComponent} from "../profile-settings/profile-settings.component";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor( public profileService : ProfileService) { }
  ngOnInit() {

  }



}
