import { Injectable } from '@angular/core';
import {MarkList, Mark, TitleCoef} from "./app.types";
import {UserAuthService} from "./user-auth.service";
import {Http,Response,Headers} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class MarksService {

  constructor(private userAuthService : UserAuthService, private http : Http) { }

  getMarksList(title : string ): Observable<MarkList>
  {
    return this.http.get("/api/list/marks?title="+ title )
      .map((res : Response) => res.json() );
  }

  getListTitles(): Promise<string[]> {
    let headers : Headers = new Headers();
    console.log("Mark getListTitles")
    this.userAuthService.appendAuthHeader(headers);
    return this.http.get("/api/list/teacher/marks/titles" , { headers : headers })
      .map((res : Response) => res.json())
      .toPromise();
  }

  publishCompsition(title : string, composition : TitleCoef [] ){{
    let headers : Headers = new Headers();
    this.userAuthService.appendAuthHeader(headers);
    return this.http.post("/api/list/teacher/marks/average?title="+title ,composition, { headers : headers })
      .toPromise();
  }}

  publish(title : string, markList : Mark [] ) {
    let headers : Headers = new Headers();
    this.userAuthService.appendAuthHeader(headers);
    return this.http.post("/api/list/teacher/marks?title="+title ,markList, { headers : headers })
      .toPromise();
  }

  search(recherche : string ) {
  return this.http.get("/api/list/marks/list/search?title="+recherche)
    .map((res : Response)=> res.json()).toPromise();
  }
}
