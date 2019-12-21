import { Component, OnInit } from '@angular/core';
import Product from '../shared/model/Product';
import { ProductService } from '../shared/services/product.service';


@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.scss']
})
export class ProductGridComponent implements OnInit {

  produits  : Array <Product> = [];
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getAll()
    }
    affiche(data: Product){
      alert('le produit: a ete ajouter au panier');}

      onDelete(id: string) {
        if (confirm("Are you sure to delete this record?")) {
          this.productService.deleteProduct(id).subscribe(res => {
            this.productService.getAll();
          });
        }
      }

}
