import { Component } from '@angular/core';
import { Product } from '../services/api/models/product.interface';
import { ProductService } from '../services/api/products/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss'],
})
export class NewProductComponent {
  product: Product = {};

  constructor(private service: ProductService, private router: Router) {}

  saveProduct() {
    this.service.createProduct(this.product).subscribe({
      next: () => {
        this.router.navigate(['products']);
      },
    });
  }
}
