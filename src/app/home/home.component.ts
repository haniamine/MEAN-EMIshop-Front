import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private userService:UserService) { }
  token = null;
  ngOnInit() {
    this.token = sessionStorage.getItem('token');
    this.userService.setUser(this.token);
  }

}
