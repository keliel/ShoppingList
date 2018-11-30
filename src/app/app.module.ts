import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';

import { ProductSearchBarComponent } from './components/product-search-bar/product-search-bar.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { NavigationComponent } from './components/navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductSearchBarComponent,
    ShoppingListComponent,
    MainPageComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbTypeaheadModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
