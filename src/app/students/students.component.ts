import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  // instantiate students to an empty array
  /*
  students: Student[];
  student: Student = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    year: "",
    bio: "",
    school: "",
    major: "",
    canTutor: [],
    password: ""
  };
  */
  students: Observable<any[]>;

  constructor(private db: AngularFirestore) {
    //this.students = af.list<any>('/Students').valueChanges();
    this.students = db.collection('users').valueChanges();
    //console.log(this.students);
  }

  ngOnInit() {
    // retrieve students from the api
    //this.studentsService.getAllStudents().subscribe(students => {
    //  this.students = students;
    //});
  }
}
