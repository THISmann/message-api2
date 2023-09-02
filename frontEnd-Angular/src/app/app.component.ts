import { Component, Input } from '@angular/core';
import { FirstApiService } from './first-api.service';
import axios from 'axios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  cards = [];
  private apiUrl = 'https://bandaumnikov.ru/api/test/site/get-index';
  private headers = {
    // 'x-rapidapi-host': 'jokes-by-api-ninjas.p.rapidapi.com',
    // 'x-rapidapi-key': 'your-rapid-api-key'
  };



  ngOnInit(): void {
    this.getRestaurant();
  }
  getRestaurant() {
    axios.get(this.apiUrl, { headers: this.headers })
      .then(response => {
        console.log(response.data.data);
        this.cards = response.data.data;
      })
      .catch(error => {
        console.error(error);
      });
  }
}
