import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Product } from './product';
import { ResponseProducts } from './responseProducts';
import { ResponseProduct } from './responseProduct';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiURL = 'https://comlyn.com/rnd/api';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  /** GET product list */
  getProducts(): Observable<ResponseProducts> {
    const url = `${this.apiURL}/product`;
    return this.http.get<ResponseProducts>(url).pipe(
      tap((_) => console.log('fetched products')),
      catchError(this.handleError<any>('getProducts', []))
    );
  }

  /** GET product by uuid */
  getProduct(uuid: string): Observable<ResponseProduct> {
    const url = `${this.apiURL}/product/${uuid}`;
    return this.http.get<ResponseProduct>(url).pipe(
      tap((_) => console.log('fetched product')),
      catchError(this.handleError<any>('getProduct', []))
    );
  }

  /** Add new product */
  addProduct(product: Product): Observable<ResponseProduct> {
    return this.http
      .post<ResponseProduct>(this.apiURL, product, this.httpOptions)
      .pipe(
        tap((_) => console.log('added new product')),
        catchError(this.handleError<any>('addProduct'))
      );
  }

  /** Update product */
  updateProduct(product: Product, uuid: string): Observable<ResponseProduct> {
    const url = `${this.apiURL}/product/${uuid}`;
    return this.http
      .patch<ResponseProduct>(url, product, this.httpOptions)
      .pipe(
        tap((_) => console.log(`updated product with uuid: ${uuid}`)),
        catchError(this.handleError<any>('updateProduct'))
      );
  }

  /** Delete product */
  deleteProduct(uuid: string): Observable<ResponseProduct> {
    const url = `${this.apiURL}/product/${uuid}`;
    return this.http.delete<ResponseProduct>(url).pipe(
      tap((_) => console.log(`deleted product with uuid: ${uuid}`)),
      catchError(this.handleError<any>('deleteProduct', []))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
