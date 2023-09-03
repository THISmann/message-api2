import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-ramdom',
  templateUrl: './ramdom.component.html',
  styleUrls: ['./ramdom.component.css']
})
export class RamdomComponent {
  constructor(){}
  // Object of Random Restaurant
  RandomRestaurant:any = {};
  // Api Url
  private apiUrl = 'https://bandaumnikov.ru/api/test/site/get-index';
  // Api Header
  private headers = {};

  ngOnInit(): void {
    //this.getRamdomRestaurant();
  }

  /**
   * get a random Restaurant with the list of restaurant
   */
  getRandomRestaurant(){ 
    axios
      .get(this.apiUrl, { headers: this.headers })
      .then((response) => {
        console.log(response.data.data); 
        const randomIndex = Math.floor(Math.random()*response.data.data.length); 
        this.RandomRestaurant = response.data.data[randomIndex];
        console.log(this.RandomRestaurant);
      })
      .catch((error) => {
        console.error(error);
      });
  }

}
