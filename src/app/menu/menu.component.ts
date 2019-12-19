import { Component, OnInit } from '@angular/core';

import {MatDialog} from "@angular/material";
import {LoginComponent} from "../login/login.component";
import {PanierComponent} from "../panier/panier.component";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

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
