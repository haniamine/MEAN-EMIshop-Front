import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import User from "../model/User";
import Login from "../model/Login";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userConnected: User;
  readonly baseURL = "http://localhost:3000/api/user";
  constructor(private http: HttpClient) { }
  register(user: User) {
    this.http.post(this.baseURL +'register', user).subscribe(c => console.log(c));
    console.log("Nouvelle inscription" + user);
  }
  user() {
    let res: any = null;
    const token: string = sessionStorage.getItem('token');
    this.http.get(this.baseURL+'me', {headers: {Authorization: JSON.parse(token)}})
    .subscribe(c => {
    res = c ;
    console.log(res);
    sessionStorage.setItem('id', JSON.stringify(res.id)); } );
  }
  login(user: Login): string {
    let res: any = '';
    this.http.post(this.baseURL+'/login', user ).subscribe(c => {
      res = c;
      console.log(res.token);
      sessionStorage.setItem('id', JSON.stringify(res.token));

    });
    return JSON.stringify(res.token);

  }
}
