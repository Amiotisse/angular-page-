/**
 * Created by Amina on 07/05/2017.
 */

export type Student = {
  lastName : string,
  firstName : string,
  email : string
}
export type Mark = {
  student: Student,
  value : number
};

export type StudentList = {
  title : string,
  ownerUserId : string,
  list : Student[]
}

export type MarkList = {
  title : string,
  ownerUserId : string,
  list : Mark[]
};

export type TitleCoef = {
  markListTitle : string,
  coef : number
}

export  type Module ={
  title : string,
  word : string,
  desc : string,
  code : string,
  support : string
}
