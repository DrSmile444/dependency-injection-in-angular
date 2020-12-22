import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {delay, map} from 'rxjs/operators';

import {User} from '../models';
import {MOCK_USERS} from '../mocks';


@Injectable()
export class UserService {
  constructor() {}

  getUsers(): Observable<User[]> {
    return of(MOCK_USERS).pipe(
      delay(2000),
    );
  }
}
