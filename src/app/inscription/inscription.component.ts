import { Component, OnInit } from '@angular/core';
import {UserService} from "../shared/services/user.service";
import User from "../shared/model/User";
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {
  public signupForm: FormGroup;
  constructor(private userService : UserService) { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
      mail: new FormControl('')
    });
  }
  onSubmit(user: User) {
    this.userService.register(user);
  }
}
