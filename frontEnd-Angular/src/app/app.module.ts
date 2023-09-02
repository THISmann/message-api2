import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import axios from 'axios'; 
import { NavbarComponent } from './navbar/navbar.component'; 
import { CardComponent } from './card/card.component';
import { HomeComponent } from './home/home.component';
import { CardListsComponent } from './card-lists/card-lists.component';

@NgModule({
  declarations: [
    AppComponent, 
    NavbarComponent, 
    CardComponent,
    HomeComponent,
    CardListsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
