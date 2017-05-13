/**
 * Created by Amina on 07/05/2017.
 */
export type Mark = {
  student:{
    lastName : string,
    firstName : string,
    email : string
  },
  value : number
};
export type MarkList = {
  title : string,
  ownerUserId : string,
  marks : Mark[]
};
export  type Module ={
  title : string,
  word : string,
  desc : string,
  code : string,
  support : string
}
