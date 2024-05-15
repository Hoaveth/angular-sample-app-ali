import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseUrl: string = 'https://fakestoreapi.com/';

  constructor(private http: HttpClient) {}

  getAllProductsWithLimit(limit: number = 5): Observable<any> {
    const productsUrl: string = `${this.baseUrl}products?limit=${limit}`;
    return this.http.get<Product[]>(productsUrl);
  }

  createProduct(product: Product): Observable<Product> {
    const productsUrl: string = `${this.baseUrl}products`;
    return this.http.post<Product>(productsUrl, product);
  } 
}
