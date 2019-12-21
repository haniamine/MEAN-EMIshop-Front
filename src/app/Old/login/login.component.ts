import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material";
import {InscriptionComponent} from "../../inscription/inscription.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public dialog:MatDialog) { }
  inscription():void{
    event.preventDefault();
    const dialogConfig = this.dialog.open(InscriptionComponent,{
    })}
  ngOnInit() {
  }

}
