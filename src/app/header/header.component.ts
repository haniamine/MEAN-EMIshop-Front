import { Component, OnInit } from '@angular/core';
import {LoginComponent} from "../login/login.component";
import {PanierComponent} from "../panier/panier.component";
import {MatDialog} from "@angular/material";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog($event: MouseEvent): void {
    $event.preventDefault();
    const dialogConfig = this.dialog.open(LoginComponent,{
      width: '500px',
      height: '400px'
    } ) } ;

  openPanier($event: MouseEvent): void {
    $event.preventDefault();
    const dialogpanier = this.dialog.open(PanierComponent,{
      width: '1000px',
      height: '700px'

    });

  }
}
