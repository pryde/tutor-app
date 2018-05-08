import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  signupForm: FormGroup;
  detailForm: FormGroup;
  userInfoForm: FormGroup;
  newUser: boolean;

  constructor(public fb: FormBuilder, public auth: AuthService) { }

  ngOnInit() {

    // First Step
    this.signupForm = this.fb.group({
      'email': ['', [
        Validators.required,
        Validators.email
        ]
      ],
      'password': ['', [
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
        Validators.minLength(6),
        Validators.maxLength(25),
        Validators.required
        ]
      ],
      'region': ['', [
        ]
      ],
    });

    // Second Step
    this.detailForm = this.fb.group({
      'catchPhrase': ['', [ Validators.required ] ]
    });

    // Third Step
    this.userInfoForm = this.fb.group({
      'firstName': ['', [Validators.required]],
      'lastName': ['', [Validators.required]],
      'school': ['', [Validators.required]],
      'major': ['', [Validators.required]],
      'year': ['', [Validators.required]]
    });
  }

  // Using getters will make your code look pretty
  get email() { return this.signupForm.get('email') }
  get password() { return this.signupForm.get('password') }

  get catchPhrase() { return this.detailForm.get('catchPhrase') }

  get firstName() { return this.userInfoForm.get('firstName') }
  get lastName() { return this.userInfoForm.get('lastName') }
  get school() { return this.userInfoForm.get('school') }
  get major() { return this.userInfoForm.get('major') }
  get year() { return this.userInfoForm.get('year') }


  // Step 1
  signup() {
    if (this.newUser) {
      return this.auth.emailSignUp(this.email.value, this.password.value)
    }
    else {
      return this.auth.emailSignIn(
        this.email.value, this.password.value
      )
    }
  }

  // Step 2
  setCatchPhrase(user) {
    return this.auth.updateUser(user, { catchPhrase:  this.catchPhrase.value })
  }

  // Step 3
  setUserInfo(user) {
  const isTutorBox: HTMLInputElement = document.getElementById('isTutor')
  console.log(isTutorBox.checked)
  return this.auth.updateUser(user, { firstName: this.firstName.value,
    lastName: this.lastName.value, school: this.school.value,
    major: this.major.value, year: this.year.value, isTutor: isTutorBox.checked })
  }

  // Confirm Completion
  isComplete(user) {
    return (user.uid && user.catchPhrase && user.firstName && user.lastName
      && user.school && user.major);
  }

  // Sign Out
  signout() {
    return this.auth.signOut();
  }

  // Specify whether user has existing account
  setNewUser(val: boolean) {
    this.newUser = val;
  }
}
