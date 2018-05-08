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
  user: any;

  constructor(public auth: AuthService) { }

  updateBio() {
    this.auth.user.subscribe(user => this.user = user,
    () => this.auth.updateUser(this.user, {bio: this.bio}); console.log('Updated bio to: ' + this.bio + ' on user: ' + this.user.uid));
  }
}
