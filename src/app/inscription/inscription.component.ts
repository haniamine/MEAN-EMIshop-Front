import { Component, OnInit } from '@angular/core';
import {UserService} from "../shared/services/user.service";
import User from "../shared/model/User";

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {

  constructor(private userService :UserService) { }

  ngOnInit() {
  }
  onSubmit(user:User){
    this.userService.register(user);
  }
}
