import { Component, OnInit } from '@angular/core';
import {UserService} from "../shared/services/user.service";
import User from "../shared/model/User";
import {FormControl, FormGroup} from '@angular/forms';
import { LoginComponent } from '../login/login.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {
  public signupForm: FormGroup;
  constructor(private userService : UserService,public dialog: MatDialog) { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
      mail: new FormControl(''),
      role: new FormControl('user')
    });
  }
  onSubmit(user: User) {
    this.userService.register(user);
    this.dialog.closeAll()
  }
}
