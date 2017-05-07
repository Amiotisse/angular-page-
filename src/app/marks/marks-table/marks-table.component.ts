import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-marks-table',
  templateUrl: './marks-table.component.html',
  styleUrls: ['./marks-table.component.css','../marks-row-display/marks-row-display.component.css']
})
export class MarksTableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
   @Input() marksList :{ student:{lastName:string,firstName :string ,email: string },value : number }[] ;
}
