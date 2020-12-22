import { Component } from '@angular/core';

import { User, UserAddress } from './models';
import { MOCK_USERS } from './mocks';


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

  transformAddress(userAddress: UserAddress): string {
    return `${userAddress.city}, ${userAddress.street}, ${userAddress.suite}`;
  }

  transformWebsite(website: string): string {
    return `https://${website}`;
  }

  private getUsers(): void {
    this.areUsersLoading = true;

    setTimeout(() => {
      this.areUsersLoading = false;
      this.users = MOCK_USERS;
    }, 1000);
  }
}
