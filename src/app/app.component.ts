import { Component } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { User } from './models';
import { UserService } from './services';
import {TransformAddressPipe} from './pipes';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: User[] = [];

  areUsersLoading: boolean = false;

  constructor(
    private userService: UserService,
    private transformAddressPipe: TransformAddressPipe,
  ) {
    this.getUsers();
  }

  private getUsers(): void {
    this.areUsersLoading = true;

    this.userService.getUsers()
      .pipe(finalize(() => this.areUsersLoading = false))
      .subscribe((users) => {
        this.users = users;
        const firstUserAddress = this.transformAddressPipe.transform(this.users[0].address);
        console.log(firstUserAddress);
      });
  }
}
