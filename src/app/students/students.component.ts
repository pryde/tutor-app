import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';
import { Student } from '../student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  // instantiate students to an empty array
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

  constructor(private studentsService: StudentsService) { }

  ngOnInit() {
    // retrieve students from the api
    this.studentsService.getAllStudents().subscribe(students => {
      this.students = students;
    });
  }

  postStudent(student) {
    this.studentsService.createStudent(student).subscribe(students => {
      this.students = students;
    });
  }

  deleteStudent(student) {
    this.studentsService.deleteStudent(student).subscribe(students => {
      this.students = students;
    });
  }
}
