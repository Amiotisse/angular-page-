import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Mark} from "../../app.types";

@Component({
  selector: 'app-marks-row-display',
  templateUrl: './marks-row-display.component.html',
  styleUrls: ['./marks-row-display.component.css']
})
export class MarksRowDisplayComponent implements OnInit {
  @Input() mark: Mark ;
  @Input() index : number ;
  @Input() showAction: boolean = false;
  @Input() editNote: boolean;
  @Output() supp : EventEmitter<Mark>;
  @Output() change : EventEmitter<{index:number , mark :Mark}>;
  constructor() {
    this.supp = new EventEmitter<Mark>();
    this.change = new EventEmitter<{index:number , mark :Mark}>();
  }

  onChange(){
    this.change.emit({index : this.index , mark :this.mark});
  }

  ngOnInit() {
  }

  onDelete(){
    this.supp.emit(this.mark);
  }
}
