import { Injectable } from '@angular/core';

@Injectable()
export class UserRoleService {

  constructor() { }
  user_roles = [
    {
      display : "Enseignant",
      value :"teacher",
    },
    {
      display : "Etudiant",
      value : "student",
    }
  ];
  user_roles_selected = this.user_roles[0];
}
