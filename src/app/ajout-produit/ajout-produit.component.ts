import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../shared/services/product.service';
import Product from '../shared/model/Product';

@Component({
  selector: 'app-ajout-produit',
  templateUrl: './ajout-produit.component.html',
  styleUrls: ['./ajout-produit.component.scss']
})
export class AjoutProduitComponent implements OnInit {
  public productForm: FormGroup;
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productForm = new FormGroup({
      title: new FormControl(''),
      description: new FormControl(''),
      categorie: new FormControl(''),
      price: new FormControl(''),
      picUrl: new FormControl('')
    });
  }
  onSubmit(product: Product) {
    .0

    this.productService.postProduct(product);
  }

}
