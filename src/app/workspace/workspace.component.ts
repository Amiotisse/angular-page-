import { Component, OnInit } from '@angular/core';
import {ProfileService} from "../profile.service";
import {AddModuleComponent} from "../add-module/add-module.component";
import {MdDialog, MdSnackBar} from "@angular/material";


@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.css']
})
export class WorkspaceComponent implements OnInit {

  constructor( public profileService : ProfileService ,
               public adddialog: MdDialog ,
               public snackBar: MdSnackBar ) { }
  ngOnInit() {
  }
  onAdd(){
    let dialog = this.adddialog.open(AddModuleComponent);

    /*dialog.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if (result) {
        this.snackBar.open("Module Ajouter", "X", {duration : 1000});
      }
    });*/
  }
}
