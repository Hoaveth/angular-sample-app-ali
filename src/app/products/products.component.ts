import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/api/products/product.service';
import { Product } from '../services/api/models/product.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private service: ProductService) {}

  ngOnInit(): void {
    this.service.getAllProductsWithLimit().subscribe({
      next: (data) => {
        this.products = data;
      },
    });
  }
}
