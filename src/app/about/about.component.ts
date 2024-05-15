import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/api/products/product.service';
import { Product } from '../services/api/models/product.interface';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  param: any;
  queryParam: any;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private service: ProductService
  ) {}

  ngOnInit(): void {
    this.param = this.activatedRoute.snapshot.params['username'];
    this.queryParam = this.activatedRoute.snapshot.queryParams['test'];

    const product: Product = {
      title: 'Test',
      description: 'Product Desc',
      price: 12,
      category: 'Any',
      image: 'https://some-image.jpg',
    };

    this.service.createProduct(product).subscribe({
      next: (result: Product) => {
        console.log(result);
      },
      error: (error: HttpErrorResponse) => {
        if (error instanceof ErrorEvent) {
          console.error('An error occured:', error);
        } else {
          console.error(
            `A server-side error occured: ${error.status}', ${error.error.message}`
          );
        }
      },
    });
  }

  navigateToRoute(): void {
    this.router.navigate(['about']);
  }
}
