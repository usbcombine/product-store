import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  product: Product = {
    uuid: null,
    currency: 'GBR',
    delivery_cost: '',
    description: '',
    // images: [],
    price: '',
    price_offer: '',
    stock: '',
    sku: '',
    title: '',
    created: null,
    updated: null,
  };

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    const uuid = this.route.snapshot.paramMap.get('uuid');
    if (uuid) {
      this.getProduct(uuid);
    }
  }

  goToList(): void {
    this.router.navigate(['/list']);
  }

  getProduct(uuid: string) {
    this.productService.getProduct(uuid).subscribe((product) => {
      this.product = product.data;
    });
  }

  addProduct(): void {
    const uuid = this.route.snapshot.paramMap.get('uuid');
    if (uuid) {
      this.productService
        .updateProduct(this.product, uuid)
        .subscribe((_) => this.goToList());
    } else {
      this.productService
        .addProduct(this.product)
        .subscribe((_) => this.goToList());
    }
  }

  ngOnInit(): void {}
}
