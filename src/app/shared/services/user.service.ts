import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import User from "../model/User";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  post(user: User){
    this.http.post('http://127.0.0.1:3000/api/user/register',user).subscribe(c=>console.log(c))
    console.log(user);
  }
}
