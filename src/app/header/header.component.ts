import { Component, OnInit } from '@angular/core';
import {LoginComponent} from '../login/login.component';
import {PanierComponent} from '../panier/panier.component';
import {MatDialog} from '@angular/material';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog,private userService:UserService) { }
  token = null;
  ngOnInit() {
    this.token = sessionStorage.getItem('token');
  }

  openDialog($event: MouseEvent): void {
    this.dialog.closeAll()
    $event.preventDefault();
    const dialogConfig = this.dialog.open(LoginComponent, {
      width: '500px',
      height: '400px'
    } ); }
  openPanier($event: MouseEvent): void {
    this.dialog.closeAll()
    $event.preventDefault();
    const dialogpanier = this.dialog.open(PanierComponent, {
      width: '1000px',
      height: '700px'

    }); }
    disconnect(): void {
      sessionStorage.removeItem('token');
      window.location.reload();   }


}
