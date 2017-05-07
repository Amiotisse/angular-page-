import {Component, OnInit, OnDestroy} from '@angular/core';
import {MarkList, } from "../app.types";
import {MarksService} from "../marks.service";
import {ActivatedRoute} from "@angular/router";
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-marks-publish',
  templateUrl: './marks-publish.component.html',
  styleUrls: ['./marks-publish.component.css']
})
export class MarksPublishComponent implements OnInit,OnDestroy {
  markList : MarkList = {
    title : '',
    ownerUserId :'',
    marks : []
  };
  markListSubscription : Subscription;
  constructor( private marksService : MarksService, private route : ActivatedRoute) { }

  ngOnInit() {
    let title = this.route.snapshot.params['title'];
    this.markListSubscription = this.marksService.getMarksList(title)
      .subscribe((markList : MarkList)=>this.markList = markList )
    ;
  }
  ngOnDestroy(){
    this.markListSubscription.unsubscribe();
  }

}
