import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../Models/api-models/student.models';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
private baseApiUrl="https://localhost:44368"
  constructor(private httpClient:HttpClient) { }

  getStudents():Observable<Student[]>{
    return this.httpClient.get<Student[]>(this.baseApiUrl+'/Student')
  }
  
  getStudent(studentId:string | null):Observable<Student>{
    return this.httpClient.get<Student>(this.baseApiUrl+'/students/'+studentId)
  }
}
