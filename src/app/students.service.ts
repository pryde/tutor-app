import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class StudentsService {

  constructor(private http: Http) { }

  // Get all students from the API
  getAllStudents() {
    return this.http.get('/api/students')
      .map(res => res.json());
  }

  createStudent(student: any) {
    return this.http.post('/api/students', student)
      .map(res => res.json());
  }
}
