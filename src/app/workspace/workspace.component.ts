import { Component, OnInit } from '@angular/core';
import {ProfileService} from "../profile.service";

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.css']
})
export class WorkspaceComponent implements OnInit {

  constructor( public profileService : ProfileService ) { }
  ngOnInit() {
  }

}
