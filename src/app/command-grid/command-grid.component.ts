import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { CommandeService } from '../shared/services/commande.service';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-command-grid',
  templateUrl: './command-grid.component.html',
  styleUrls: ['./command-grid.component.scss']
})
export class CommandGridComponent implements OnInit {
  constructor(private commandService: CommandeService,private userService: UserService ,private route: ActivatedRoute) { }

  ngOnInit() {
    this.commandService.getCommandsByUsers(this.userService.userConnected._id);
  }

}
