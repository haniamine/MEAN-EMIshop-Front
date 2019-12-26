import { Component, OnInit } from '@angular/core';
import { CommandeService } from '../shared/services/commande.service';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute } from '@angular/router';
import Product from '../shared/model/Product';

@Component({
  selector: 'app-command-details',
  templateUrl: './command-details.component.html',
  styleUrls: ['./command-details.component.scss']
})
export class CommandDetailsComponent implements OnInit {
  products : Array<Product>[];
  displayedColumns: string[] = ['img', 'name', 'price', 'desc', 'qte'];
  constructor(private commandService: CommandeService, private route: ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.commandService.getDetails(id);
    /*for ( let idProd of this.commandService.selectedCommand.products ){
      console.log(idProd)
      let prod = this.commandService.getProduct(idProd);
      this.products.push(prod);
    }*/

  }

}
