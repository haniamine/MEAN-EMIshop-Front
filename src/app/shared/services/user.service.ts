import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import User from "../model/User";
import Login from "../model/Login";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  register(user: User){
    this.http.post('http://127.0.0.1:3000/api/user/register',user).subscribe(c=>console.log(c))
    console.log(user);
  }
  login(user: Login){
    let res :any ="";
    this.http.post('http://127.0.0.1:3000/api/user/login',user).subscribe(c=>{
      res=c;
      console.log(res.token);
      localStorage.setItem('token', JSON.stringify(res.token))
    });


  }
}
