import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import User from "../model/User";
import Login from "../model/Login";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  register(user: User) {
    this.http.post('http://127.0.0.1:3000/api/user/register', user).subscribe(c => console.log(c));
    console.log(user);
  }
  user() {
    let res: any = null;
    const token: string = sessionStorage.getItem('token');
    this.http.get('http://127.0.0.1:3000/api/user/me', {headers: {Authorization: JSON.parse(token)}})
    .subscribe(c => {
    res = c ;
    console.log(res);
    sessionStorage.setItem('id', JSON.stringify(res.id)); } );
  }
  login(user: Login): string {
    let res: any = '';
    this.http.post('http://127.0.0.1:3000/api/user/login', user ).subscribe(c => {
      res = c;
      console.log(res.token);
      sessionStorage.setItem('id', JSON.stringify(res.token));

    });
    return JSON.stringify(res.token);

  }
}
