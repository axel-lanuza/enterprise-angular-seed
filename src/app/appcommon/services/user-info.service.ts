import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable()
export class UserInfoService {
  constructor(private http: HttpClient) {}

  public getUserInfo(): Observable<User> {
    // return this.http.get<User>('api/userInfo');
    return this.http.get<User>('https://my.api.mockaroo.com/userInfo?key=a7ad3990');
  }
}
