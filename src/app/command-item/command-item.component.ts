import { Component, OnInit, Input } from '@angular/core';
import { CommandeService } from '../shared/services/commande.service';
import { Commande } from '../shared/model/commande';

@Component({
  selector: 'app-command-item',
  templateUrl: './command-item.component.html',
  styleUrls: ['./command-item.component.scss']
})
export class CommandItemComponent implements OnInit {

  @Input() command :Commande;
  constructor() { }

  ngOnInit() {
  }

}
