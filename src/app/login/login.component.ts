import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material";
import {InscriptionComponent} from "../inscription/inscription.component";
import {UserService} from "../shared/services/user.service";
import Login from '../shared/model/Login';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public userForm: FormGroup;
  constructor(public dialog: MatDialog, private userService: UserService) { }
  inscription(): void {
    event.preventDefault();
    const dialogConfig = this.dialog.open(InscriptionComponent, {
      width: '1000px',
      height: '600px'
    }); }
   login(login: Login ) {
      const res: any = this.userService.login(login);
      console.log(res);
      if (res !== 0) { this.dialog.closeAll(); }
      console.log(sessionStorage.getItem('token'));

    }
  ngOnInit() {
    this.userForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    });
  }

}
