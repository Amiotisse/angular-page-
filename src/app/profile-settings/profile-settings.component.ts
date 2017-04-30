import { Component, OnInit } from '@angular/core';
import {MdDialogRef} from "@angular/material";

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.css']
})
export class ProfileSettingsComponent implements OnInit {



  constructor( private dialogRef : MdDialogRef <ProfileSettingsComponent> ) { }
  onSave(){
    this.dialogRef.close(true);

  }

  onCancel(){
    this.dialogRef.close(false);
  }

  ngOnInit(){
  }

}
