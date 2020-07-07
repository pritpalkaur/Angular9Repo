import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { IProduct } from './shared/models/product';
import { IPagination } from './shared/models/pagination';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
 
  

  constructor( private http: HttpClient){}

  ngOnInit(): void {
    console.log("working");
    // this.http.get('https://localhost:44376/api/products')
    // .subscribe((response: IPagination) =>
    // {
    //   console.log(response);
    //   this.products = response.data;
    // }, error=>
    // {
    //   console.error();
    // });

  }
 
}
