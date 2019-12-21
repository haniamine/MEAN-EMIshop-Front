import { Component, OnInit } from '@angular/core';
import {LoginComponent} from "../Old/login/login.component";
import {PanierComponent} from "../panier/panier.component";
import {MatDialog} from "@angular/material";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit() {
  }
  openDialog():void{
    const dialogConfig = this.dialog.open(LoginComponent,{
    })}
  openPanier():void{
    const dialogpanier = this.dialog.open(PanierComponent,{
      width:'500px',
      height:'700px'
    })

  }
}
