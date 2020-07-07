import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './shop/product-details/product-details.component';
import { ShopComponent } from './shop/shop.component';
import { TestErrorComponent } from './core/test-error/test-error.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'testError', component: TestErrorComponent},
  {path:'shop', loadChildren: () => import('./shop/shop.module').then(mod => mod.ShopModule)},
  {path:'shop/:id', component: ProductDetailsComponent},
  // {path: '**', redirectTo: '', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
