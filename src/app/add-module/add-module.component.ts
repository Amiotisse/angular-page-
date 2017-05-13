import { Component, OnInit } from '@angular/core';
import {MdDialogRef} from "@angular/material";
import {NgForm} from "@angular/forms";
import {Module} from "../app.types";


@Component({
  selector: 'app-add-module',
  templateUrl: './add-module.component.html',
  styleUrls: ['./add-module.component.css']
})
export class AddModuleComponent implements OnInit {

  constructor(private dialog: MdDialogRef <AddModuleComponent>) {
  }

  onSave() {
    this.dialog.close(true);

  }

  onCancel() {
    this.dialog.close(false);
  }

  onGenerate() {
    console.log('Generated');
  }

  ngOnInit() {
  }

  addModule(form: NgForm) {
    const value =form.value;
   var
     module: Module = {
       title : value.title,
        word : value.word,
        desc : value.desc,
        code : value.code,
        support : value.support,
     }
  }
}
