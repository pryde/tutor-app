import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  editing = true;
  bio: string;

  constructor(public auth: AuthService) { }

  updateProfile(user) {
    const isTutorBox: HTMLInputElement = <HTMLInputElement>document.getElementById('isTutor')
    const isTutor = isTutorBox.checked
    //console.log('Update bio: ' + this.bio);
    this.auth.updateUser(user, {year: user.year, major: user.major,
      school: user.school, bio: user.bio, isTutor: isTutor});

  }
}
