import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, Products } from './interface';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  private URL = 'https://cms.yukayamamoto.me';
  constructor(private http: HttpClient) {}

  getProduct() {
    return this.http.get<Products>(
      this.URL + '/api/apparelpages?populate=deep,3'
    );
  }

  getProductById(id: any) {
    return this.http.get<Products>(
      this.URL + '/api/apparelpages/' + id + '?populate=deep,3'
    );
  }
}
