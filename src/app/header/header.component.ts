import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  productCount: number;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.gerProductCount();
  }

  gerProductCount(): void {
    this.productService.getProducts().subscribe((products) => {
      this.productCount = Array.from(products.data).length;
    });
  }
}
