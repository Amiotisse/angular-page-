import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-marks-row-display',
  templateUrl: './marks-row-display.component.html',
  styleUrls: ['./marks-row-display.component.css']
})
export class MarksRowDisplayComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() mark:{ student:{lastName:string,firstName :string ,email: string },value : number } ;
}
