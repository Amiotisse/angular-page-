import { Component, OnInit } from '@angular/core';
import {UserAuthService} from "../user-auth.service";
import {Router} from "@angular/router";
import {AddModuleComponent} from "../add-module/add-module.component";
import {MdDialog, MdSnackBar} from "@angular/material";

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.css']
})
export class ModuleComponent implements OnInit {

  constructor(  public userauth :UserAuthService,
                public router : Router,
                public adddialog: MdDialog ,
                public snackBar: MdSnackBar,


  ) { }

  ngOnInit() {
  }
  onlogout(){
    this.userauth.disconnect();
    this.router.navigate([""]);
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
}
