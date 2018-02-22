import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  student: Student;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    this.student = new Student();
  }

  signup(student) {
    this.loginService.createStudent(student)
      .subscribe(student => this.student = student);

    this.router.navigateByUrl('/students');
  }

}
