import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFirestore } from 'angularfire2/firestore';
import { AuthService } from '../auth.service'

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
  searchString: string;
  searchArray: Observable<any[]>;

  constructor(
    private db: AngularFirestore,
    private auth: AuthService) {
    //this.students = af.list<any>('/Students').valueChanges();
    this.students = db.collection('users').valueChanges();
    //console.log(this.students);
  }

  onKey(event: any) {
    this.searchString = event.target.value;
    console.log('Search String: ' + this.searchString)
    this.students = this.students.map(students => students.filter(student =>
      student.firstName.toLowerCase().includes(this.searchString.toLowerCase())
      || student.lastName.toLowerCase().includes(this.searchString.toLowerCase())));
    console.log(this.students);
  }

  ngOnInit() {
    // retrieve students from the api
    //this.studentsService.getAllStudents().subscribe(students => {
    //  this.students = students;
    //});
  }
}
