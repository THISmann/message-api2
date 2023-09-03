import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-ramdom',
  templateUrl: './ramdom.component.html',
  styleUrls: ['./ramdom.component.css']
})
export class RamdomComponent {
  constructor(){

  }
  RandomRestaurant:any = {};
  private apiUrl = 'https://bandaumnikov.ru/api/test/site/get-index';
  private headers = {};

  ngOnInit(): void {
    //this.getRamdomRestaurant();
  }

  getRamdomRestaurant(){
    // const restaurant = math.ramdom()
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
