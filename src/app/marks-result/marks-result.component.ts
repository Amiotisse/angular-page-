import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ResearchBarServiceService} from "../research-bar-service.service";
import {MarksService} from "../marks.service";

@Component({
  selector: 'app-marks-result',
  templateUrl: './marks-result.component.html',
  styleUrls: ['./marks-result.component.css']
})
export class MarksResultComponent implements OnInit {

  constructor( public router : Router,
               public researchBar : ResearchBarServiceService,
               private marksService : MarksService
  ) { }
  markListList : string [] ;

  ngOnInit() {
    this.onResearch();
  }
  onResearch(){
    this.marksService.search(this.researchBar.research)
      .then((newMarkListList )=>{this.markListList = newMarkListList});
  }
  onSelectList(listTitle : string ){
    this.router.navigate(['list',listTitle]);
  }

}
