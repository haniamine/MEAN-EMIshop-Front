import { Component, OnInit } from "@angular/core";
import { UserService } from '../shared/services/user.service';
import { ActivatedRoute } from '@angular/router';
import User from '../shared/model/User';

@Component({
  selector: "app-user-profile",
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.scss"]
})
export class UserProfileComponent implements OnInit {
  user:User
  constructor(
    private userService: UserService
  ) {}

  ngOnInit() {
    this.user = this.userService.userConnected;
  }
}
