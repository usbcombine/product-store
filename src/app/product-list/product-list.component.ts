import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe((products) => {
      this.products = products.data;
    });
  }

  deleteProduct(uuid: string): void {
    // this.productService.deleteProduct(uuid).subscribe((_) => {
    //   this.products = this.products.filter((product) => product.uuid !== uuid);
    // });

    this.products = this.products.filter((product) => product.uuid !== uuid);
  }
}
