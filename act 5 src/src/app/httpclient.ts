import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class Httpclient {

  private userUrl = 'https://jsonplaceholder.typicode.com/users';
  private postUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }


  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl);
  }


  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(this.postUrl);
  }
}
