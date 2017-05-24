import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Student} from "../../app.types";



@Component({
  selector: 'app-student-table',
  templateUrl: 'student-table.component.html',
  styleUrls: ['student-table.component.css']
})
export class StudentTableComponent implements OnInit {
  @Input() studentList : Student [] ;
  @Output() studentListChange : EventEmitter<Student[]>;

  constructor( ) {
    this.studentListChange = new EventEmitter<Student[]>();
  }

  ngOnInit() {
  }
  onDelete(s : Student ){

    let index : number = this.studentList.indexOf(s);
    this.studentList.splice(index,1);
    this.studentListChange.emit(this.studentList);

  }

}
