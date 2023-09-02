import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import axios from 'axios';
import { CardRestaurantComponent } from './card-restaurant/card-restaurant.component';
import { DetailRestaurantComponent } from './detail-restaurant/detail-restaurant.component';
import { RandomRestaurantComponent } from './random-restaurant/random-restaurant.component';
import { NavbarRestaurantComponent } from './navbar-restaurant/navbar-restaurant.component';

@NgModule({
  declarations: [
    AppComponent,
    CardRestaurantComponent,
    DetailRestaurantComponent,
    RandomRestaurantComponent,
    NavbarRestaurantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
