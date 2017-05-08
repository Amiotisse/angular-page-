import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marks-result',
  templateUrl: './marks-result.component.html',
  styleUrls: ['./marks-result.component.css']
})
export class MarksResultComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onlogout(){
    this.userAuth.disconnect();
    this.router.navigate([""]);
  }

}
