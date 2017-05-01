import { Component, OnInit } from '@angular/core';
import {MdDialogRef} from "@angular/material";

@Component({
  selector: 'app-delete-module',
  templateUrl: './delete-module.component.html',
  styleUrls: ['./delete-module.component.css']
})
export class DeleteModuleComponent implements OnInit {

  constructor(private deleete : MdDialogRef <DeleteModuleComponent>) { }

  onSave(){
    this.deleete.close(true);

  }

  onCancel(){
    this.deleete.close(false);
  }

  ngOnInit() {
  }

}
