import { Injectable } from '@angular/core';
import {MarkList, Mark} from "./app.types";
import {UserAuthService} from "./user-auth.service";
import {Http,Response,Headers} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class MarksService {

  constructor(private userAuthService : UserAuthService, private http : Http) { }

  getMarksList(title : string ): Observable<MarkList>
  {
    return this.http.get("/api/marks/marks?title="+ title )
      .map((res : Response) => res.json() );


  }

  publish(title : string, markList : Mark [] ) {
    let headers : Headers = new Headers();
    this.userAuthService.appendAuthHeader(headers);
    return this.http.post("/api/marks/teacher/marks?title="+title ,markList, { headers : headers })
      .toPromise();
  }

  search(recherche : string ) {
  return this.http.get("/api/marks/marks/list/search?title="+recherche)
    .map((res : Response)=> res.json()).toPromise();
  }
}
