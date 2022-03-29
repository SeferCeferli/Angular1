import { Adress } from "./adress.models";
import { Gender } from "./gender.models";

export interface Student{
    id:string,
    firstName:string,
    lastName:string,
    dateOfBirth:string,
    email:string,
    mobile:number,
    profileImgUrl:string,
    genderId:string,
    gender:Gender,
    adress:Adress
}