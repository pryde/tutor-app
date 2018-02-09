import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  // instantiate students to an empty array
  students: any = [];

  constructor(private studentsService: StudentsService) { }

  ngOnInit() {
    // retrieve students from the api
    this.studentsService.getAllStudents().subscribe(students => {
      this.students = students;
    });
  }

}
