import { Injectable } from '@angular/core';
import { Student } from './student';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class LoginService {
  private studentsUrl = 'api/students/signup';  // URL to web api
  public hasAccount = false;

  constructor(
    private http: HttpClient) { }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  createStudent(student: Student) {
    console.log('createStudent called');
    return this.http.post<Student>(this.studentsUrl, student)
      .map(res => res);
  }

  checkStudent(email: String, password: String) {
    console.log('checkStudent called');
    var body = {
      email: email,
      password: password
    };
    let bodyString = JSON.stringify(body); // Stringify payload
    let headers =  {headers: new  HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded'})};
    return this.http.post<Student>('api/students/signin', body)
      .map(res => res);
  }

}
