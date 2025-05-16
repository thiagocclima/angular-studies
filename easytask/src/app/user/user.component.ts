import { Component, signal, computed } from '@angular/core';
// To use Signals, import signal from angular/core

import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  // initialize a signal by passing an object
  selectedUser = signal(DUMMY_USERS[randomIndex]);

  // computed values with signals
  imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);

  // get imagePath() {
  //   // the properties of the signal object must be called as a function
  //   return 'assets/users/' + this.selectedUser().avatar
  // }

  onSelectUser() {
    // to update the signal object, call the set(obj) method
    this.selectedUser.set(DUMMY_USERS[Math.floor(Math.random() * DUMMY_USERS.length)]);
  }

}
