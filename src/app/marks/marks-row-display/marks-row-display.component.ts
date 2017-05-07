import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Mark} from "../../app.types";

@Component({
  selector: 'app-marks-row-display',
  templateUrl: './marks-row-display.component.html',
  styleUrls: ['./marks-row-display.component.css']
})
export class MarksRowDisplayComponent implements OnInit {
  @Input() mark: Mark ;
  @Output() supp : EventEmitter<Mark>;
  constructor() {
    this.supp = new EventEmitter<Mark>();
  }

  ngOnInit() {
  }

  onDelete(){
    this.supp.emit(this.mark);

  }
}
