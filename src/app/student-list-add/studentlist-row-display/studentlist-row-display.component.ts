import {Component, OnInit, EventEmitter,Input, Output} from '@angular/core';
import {Student} from "../../app.types";

@Component({
  selector: 'app-studentlist-row-display',
  templateUrl: 'studentlist-row-display.component.html',
  styleUrls: ['studentlist-row-display.component.css']
})
export class StudentlistRowDisplayComponent implements OnInit {
  @Input() student: Student ;
  @Output() supp : EventEmitter<Student>;

  constructor() {
    this.supp = new EventEmitter<Student>();
  }

  ngOnInit() {
  }
  onDelete(){
    this.supp.emit(this.student);
  }
}
