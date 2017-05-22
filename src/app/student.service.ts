import { Injectable } from '@angular/core';
import {Http , Headers , Response} from "@angular/http";
import {UserAuthService} from "./user-auth.service";
import {Student, StudentList} from "./app.types";

@Injectable()
export class StudentService {

  constructor(private userAuthService : UserAuthService, private http : Http) {}

  getListTitles(): Promise<string[]> {
    let headers : Headers = new Headers();
    this.userAuthService.appendAuthHeader(headers);
    return this.http.get("/api/list/teacher/student/titles" , { headers : headers })
      .map((res : Response) => res.json())
      .toPromise();
  }

  getList(title : string) : Promise<StudentList>{
    let headers : Headers = new Headers();
    this.userAuthService.appendAuthHeader(headers);
    return this.http.get("/api/list/teacher/student?title="+title , { headers : headers })
      .map((res : Response) => res.json())
      .toPromise();
  }

  postList(title : string , studentList: Student[]){
    let headers : Headers = new Headers();
    this.userAuthService.appendAuthHeader(headers);
    return this.http.post("/api/list/teacher/list?title="+title ,studentList, { headers : headers })
      .toPromise();
  }

}
