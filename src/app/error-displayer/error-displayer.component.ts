import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-error-displayer',
  templateUrl: './error-displayer.component.html',
  styleUrls: ['./error-displayer.component.css']
})
export class ErrorDisplayerComponent implements OnInit {

  constructor() { }

  @Input() errors : any [];
  ngOnInit() {
  }

}
