import {Component, OnInit, ViewChild} from '@angular/core';
import {MdButtonToggleChange, MdSelectChange, MdSnackBar} from "@angular/material";
import {Router, ActivatedRoute} from "@angular/router";
import {UserAuthService} from "../user-auth.service";

import {Mark, StudentList} from "../app.types";
import {MarksService} from "../marks.service";
import {StudentService} from "../student.service";

@Component({
  selector: 'app-marks',
  templateUrl: './marks.component.html',
  styleUrls: ['./marks.component.css']
})
export class MarksComponent implements OnInit {

  constructor(
    public userAuth :UserAuthService,
    public router : Router,
    public studentService : StudentService,
    public marksService : MarksService,
    public snackBar: MdSnackBar,
    public route : ActivatedRoute
  ) { }

  ngOnInit() {
    this.studentService.getListTitles()
      .then((titles : string[])=> this.studentListTitles = titles);
    let titleFromRoute : string = this.route.snapshot.params['title'];
    if ( titleFromRoute ) {
      this.getStudentReq( titleFromRoute );
    }
  }
  onSelect(e:MdButtonToggleChange){
    console.log(e.value);
  }
  onlogout(){
    this.userAuth.disconnect();
    this.router.navigate([""]);
  }

  title : string = "";
  studentListTitles : string[];
  marksList : Mark[] = [];

  getStudentReq( title : string  ){
    this.studentService.getList(title)
      .then( ( students :StudentList)=> {
        this.marksList = [];
        for (let student of students.list ){
          this.marksList.push( {
            student : student,
            value : 0
          });
        }
      });
  }

  getStudent (event : MdSelectChange) {
    this.getStudentReq(event.value)
  }
  onPublish(){
    this.marksService.publish(this.title, this.marksList).then(()=>{
      this.title = "";
      this.marksList = [];
      this.snackBar.open("Liste Publié", "X", {duration : 3000});
    })



  }
  /*
  addList(form: NgForm){
    const value =form.value;
    let mark: Mark = {
        student: {
          lastName : value.lastName,
          firstName : value.firstName,
          email : value.email,
        },
        value : value.note
      };
    this.marksList.push(mark);
    form.reset();
    console.log(form);

  }*/

}
