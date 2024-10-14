import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Composants/header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './Composants/footer/footer.component';
import { ListCategoriesComponent } from './Composants/list-categories/list-categories.component';
import { HomeComponent } from './Composants/home/home.component';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './search.pipe';
import { HighlighDirectiveDirective } from './highligh-directive.directive';
import { NotFoundPageComponentComponent } from './not-found-page-component/not-found-page-component.component';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { DetailCategoryComponent } from './detail-category/detail-category.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    ListCategoriesComponent,
    HomeComponent,
    SearchPipe,
    HighlighDirectiveDirective,
    NotFoundPageComponentComponent,
    ProductCategoryComponent,
    DetailCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
