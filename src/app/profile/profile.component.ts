import { Component, OnInit } from '@angular/core';
import {ProfileService} from "../profile.service";
import {ProfileSettingsComponent} from "../profile-settings/profile-settings.component";
import {MdDialog, MdSnackBar} from "@angular/material";

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.component.html',
  styleUrls: ['profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public profileService: ProfileService ,
              public dialog: MdDialog ,
              public snackBar: MdSnackBar) {}

  ngOnInit() {
  }
  openSettings() {
    let dialogRef = this.dialog.open(ProfileSettingsComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    if (result) {
      this.snackBar.open("Enregistrer", "X", {duration : 1000});
    }
    });
  }

}
