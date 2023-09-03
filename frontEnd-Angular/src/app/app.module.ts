import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import axios from 'axios'; 
import { NavbarComponent } from './navbar/navbar.component'; 
import { CardComponent } from './card/card.component';
import { HomeComponent } from './home/home.component';
import { CardListsComponent } from './card-lists/card-lists.component';
import { DetailsComponent } from './details/details.component';
import { MessagesComponent } from './messages/messages.component';
import { StartComponent } from './start/start.component';

@NgModule({
  declarations: [
    AppComponent, 
    NavbarComponent, 
    CardComponent,
    HomeComponent,
    CardListsComponent,
    DetailsComponent,
    MessagesComponent,
    StartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Add FormsModule here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
