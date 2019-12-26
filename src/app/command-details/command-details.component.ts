import { Component, OnInit } from '@angular/core';
import { CommandeService } from '../shared/services/commande.service';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute } from '@angular/router';
import Product from '../shared/model/Product';
import {Commande} from '../shared/model/commande';
import {ProductService} from '../shared/services/product.service';

@Component({
  selector: 'app-command-details',
  templateUrl: './command-details.component.html',
  styleUrls: ['./command-details.component.scss']
})
export class CommandDetailsComponent implements OnInit {

  constructor(private commandService: CommandeService, private route: ActivatedRoute, private productService: ProductService) { }
  commande: Commande;
  products: Product[];
  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.commandService.getDetails(id);
    this.commande = this.commandService.selectedCommand;
    this.commande.products.map(c => {
      this.products.push();
    });
    console.log(this.products);
  }


}
