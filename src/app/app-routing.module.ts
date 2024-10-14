import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Composants/home/home.component';
import { NotFoundPageComponentComponent } from './not-found-page-component/not-found-page-component.component';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { compileClassMetadata } from '@angular/compiler';
import { DetailCategoryComponent } from './detail-category/detail-category.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent, children: [
      { path: 'detailCategory/:id', component: DetailCategoryComponent }
    ]
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'products/:id', component: ProductCategoryComponent },
  { path: '**', component: NotFoundPageComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
