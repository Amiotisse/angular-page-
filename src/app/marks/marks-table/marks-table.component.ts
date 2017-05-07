import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Mark} from "../../app.types";

@Component({
  selector: 'app-marks-table',
  templateUrl: './marks-table.component.html',
  styleUrls: ['./marks-table.component.css','../marks-row-display/marks-row-display.component.css']
})
export class MarksTableComponent implements OnInit {
  @Input() marksList : Mark [] ;
  @Output() marksListChange : EventEmitter<Mark[]>;
  constructor() {
    this.marksListChange = new EventEmitter<Mark[]>();
  }

  ngOnInit() {
  }

  onDelete(m : Mark ){

    let index : number = this.marksList.indexOf(m);
    this.marksList.splice(index,1);
    this.marksListChange.emit(this.marksList);

  }
}
