import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class StudentsService {

  constructor(private http: Http) { }

  // Get all students from the API
  getAllStudents() {
    console.log('getAllStudents called');
    return this.http.get('/api/students')
      .map(res => res.json());
  }

  createStudent(student: any) {
    console.log('createStudent called');
    return this.http.post('/api/students', student)
      .map(res => res.json());
  }

  deleteStudent(student: any) {
    return this.http.delete('/api/students', student)
      .map(res => res.json());
  }
}
