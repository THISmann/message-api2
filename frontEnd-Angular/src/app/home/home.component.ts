import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  cards = [];
  private apiUrl = 'https://bandaumnikov.ru/api/test/site/get-index';
  private headers = {
    // 'x-rapidapi-host': 'jokes-by-api-ninjas.p.rapidapi.com',
    // 'x-rapidapi-key': 'your-rapid-api-key'
  };

  ngOnInit(): void {
    this.getRestaurant();
  }
  // Get All restaurant Available on the Api
  getRestaurant() {
    axios
      .get(this.apiUrl, { headers: this.headers })
      .then((response) => {
        console.log(response.data.data);
        this.cards = response.data.data;
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
