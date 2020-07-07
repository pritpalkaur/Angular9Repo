import { ShopParams } from './../shared/models/shopParams';
import { IType } from './../shared/models/productType';
import { IBrand } from './../shared/models/brand';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { IPagination } from '../shared/models/pagination';
import {map} from 'rxjs/operators';
import { IProduct } from '../shared/models/product';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  baseUrl = 'https://localhost:44376/api/';

  constructor(private http: HttpClient) { }
  getProducts(ShopParams:ShopParams ){
    let params = new HttpParams();
    if (ShopParams.brandId !==0){

      params = params.append('brandId', ShopParams.brandId.toString());
        }
    if (ShopParams.typeId !==0 ){

      params = params.append('typeId', ShopParams.typeId.toString());
    }
    if(ShopParams.search){
   params = params.append('search', ShopParams.search);
 }

    params = params.append('sort', ShopParams.sort);
    params = params.append('pageIndex', ShopParams.pageNumber.toString());
    params = params.append('pageIndex', ShopParams.pageSize.toString());

    
    return this.http.get<IPagination>(this.baseUrl + 'products', {observe : 'response', params})
    .pipe(
          map(
            response =>
            {
              return response.body;
            })
    );
  }

  getBrands(){

    return this.http.get<IBrand[]>(this.baseUrl + 'products/brands');
  }
  getProduct(id:number){

    return this.http.get<IProduct>(this.baseUrl + 'products/'+ id);

  }
  getTypes(){

    return this.http.get<IType[]>(this.baseUrl + 'products/types');
  }
}
