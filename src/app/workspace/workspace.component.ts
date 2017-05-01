import { Component, OnInit } from '@angular/core';
import {ProfileService} from "../profile.service";
import {AddModuleComponent} from "../add-module/add-module.component";
import {MdDialog, MdSnackBar} from "@angular/material";
import {DeleteModuleComponent} from "../delete-module/delete-module.component";
import {UserAuthService} from "../user-auth.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.css']
})
export class WorkspaceComponent implements OnInit {

  constructor( public profileService : ProfileService ,
               public adddialog: MdDialog ,
               public snackBar: MdSnackBar,
               public userauth :UserAuthService,
               public router : Router) { }
  ngOnInit() {
  }
  onAdd(){
    let dialog = this.adddialog.open(AddModuleComponent);

    dialog.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if (result) {
        this.snackBar.open("Module Ajouté", "X", {duration : 1000});
      }
    });
  }
  onDelete(){
    let deleete = this.adddialog.open(DeleteModuleComponent);

    deleete.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if (result) {
        this.snackBar.open("Module Supprimé", "X", {duration : 1000});
      }
    });

  }
  onlogout(){
    this.userauth.disconnect();
    this.router.navigate([""]);
  }
}
