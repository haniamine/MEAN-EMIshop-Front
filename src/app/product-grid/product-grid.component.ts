import { Component, OnInit } from "@angular/core";
import Product from "../shared/model/Product";
import { ProductService } from "../shared/services/product.service";

@Component({
  selector: "app-product-grid",
  templateUrl: "./product-grid.component.html",
  styleUrls: ["./product-grid.component.scss"]
})
export class ProductGridComponent implements OnInit {

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getAll();
  }

  onDelete(id: string) {
    if (confirm("Are you sure to delete this record?")) {
      this.productService.deleteProduct(id).subscribe(res => {
        this.productService.getAll();
      });
    }
  }
}
