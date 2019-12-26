import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { InscriptionComponent } from "../inscription/inscription.component";
import { UserService } from "../shared/services/user.service";
import Login from "../shared/model/Login";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  public userForm: FormGroup;
  token: string = null;
  constructor(public dialog: MatDialog, private userService: UserService) {}
  inscription(): void {
    event.preventDefault();
    this.dialog.closeAll();
    const dialogConfig = this.dialog.open(InscriptionComponent, {
      width: "550px",
      height: "400px"
    });
  }
  login(login: Login) {
    const res: any = this.userService.login(login);
  }
  ngOnInit() {
    this.userForm = new FormGroup({
      username: new FormControl(""),
      password: new FormControl("")
    });

    this.token = sessionStorage.getItem("token");
    this.userService.setUser(this.token);
    alert(this.userService.userConnected.username);
  }
  close(){
    this.dialog.closeAll();
  }
}
