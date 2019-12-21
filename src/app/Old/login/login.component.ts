import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material";
import {InscriptionComponent} from "../../inscription/inscription.component";
import {UserService} from "../../shared/services/user.service";
import User from "../../shared/model/User";
import Login from "../../shared/model/Login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public dialog:MatDialog,private userService: UserService) { }
  inscription():void{
    event.preventDefault();
    const dialogConfig = this.dialog.open(InscriptionComponent,{
    })}
    login(login:Login){
      this.userService.login(login);
      console.log(localStorage.getItem('token'))
    }
  ngOnInit() {
  }

}
