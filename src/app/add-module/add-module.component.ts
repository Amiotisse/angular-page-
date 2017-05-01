import { Component, OnInit } from '@angular/core';
import {MdDialogRef} from "@angular/material";

@Component({
  selector: 'app-add-module',
  templateUrl: './add-module.component.html',
  styleUrls: ['./add-module.component.css']
})
export class AddModuleComponent implements OnInit {

  constructor(private dialog : MdDialogRef <AddModuleComponent>) { }
  onSave(){
    this.dialog.close(true);

  }

  onCancel(){
    this.dialog.close(false);
  }
  onGenerate(){
  console.log('Generated');
  }

  ngOnInit() {
  }

}
