import { Component } from '@angular/core';
import {User} from './models';
import {MOCK_USERS} from './mocks';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: User[] = [];

  areUsersLoading: boolean = false;

  constructor() {
    this.getUsers();
  }

  private getUsers(): void {
    this.users = MOCK_USERS;
  }
}
