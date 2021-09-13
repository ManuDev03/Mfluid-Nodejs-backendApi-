import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable,throwError, from} from 'rxjs';
import { retry, catchError} from 'rxjs/operators';

import { IStudent } from '../interfaces/iStudents';

const baseUrl = "http://localhost:3000/api";

const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'}),
      
  };



@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private _http:HttpClient) { }


  // Add Student
  addStudents(studentDetails:IStudent):Observable<IStudent[]>{

  return this._http
    .post<IStudent[]>(`${baseUrl}/students`,studentDetails,httpOptions)
}

  // Get All Students
  getAllStudents():Observable<IStudent[]>{
    console.log('Get all books request recived')

    return this._http
      .get<IStudent[]>(`${baseUrl}/students`)
      
      
  }

  // Retrieve student by Id
  getStudentById(id:string):Observable<IStudent[]>{
    console.log(`Get student request recived for ${id}`)
    return this._http
      .get<IStudent[]>(`${baseUrl}/students/${id}`)
}

  // Edit student by Id
  editStudentById(id:string,studentDetails:IStudent):Observable<IStudent[]>{
    console.log(`Get student request recived for ${id}`)
    return this._http
    .post<IStudent[]>(`${baseUrl}/students`,studentDetails,httpOptions)
      
}

  // Remove student by Id
  removeStudentById(id:string):Observable<IStudent[]>{
    console.log(`Get student request recived for ${id}`)
    return this._http
      .delete<IStudent[]>(`${baseUrl}/students/${id}`)
}



}