import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Student} from "../app.types";
import {StudentService} from "../student.service";
import {Router} from "@angular/router";
import {UserAuthService} from "../user-auth.service";

@Component({
  selector: 'app-student-list-add',
  templateUrl: './student-list-add.component.html',
  styleUrls: ['./student-list-add.component.css']
})
export class StudentListAddComponent implements OnInit {

  constructor(
    public userAuth :UserAuthService,
    public router : Router,
    public studentService :StudentService,


  ) {  }

  ngOnInit() {
  }

  onlogout(){
    this.userAuth.disconnect();
    this.router.navigate([""]);
  }
  onSave(){
    this.studentService.postList(this.title, this.studentList)
    .then(()=>{this.router.navigate(['/studentList'])});

  }
  addList(f: NgForm){
    const value =f.value;

    let
      student: Student = {

          lastName : value.lastName,
          firstName : value.firstName,
          email : value.email,
        }


    this.studentList.push(student);
    f.reset();
    console.log(this.studentList);

  }
  title : string = "";
  studentList : Student[] = [];

}
