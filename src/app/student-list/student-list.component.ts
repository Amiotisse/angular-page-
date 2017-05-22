import { Component, OnInit } from '@angular/core';
import {StudentService} from "../student.service";
import {UserAuthService} from "../user-auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  constructor(
    private studentService : StudentService,
    private userAuth : UserAuthService,
    private router : Router
  ) { }

  listsTitles : string[] = [];

  ngOnInit() {
    this.studentService.getListTitles()
      .then((listsTitles : string[] ) => this.listsTitles = listsTitles );
  }

  onlogout(){
    this.userAuth.disconnect();
    this.router.navigate([""]);
  }

}
