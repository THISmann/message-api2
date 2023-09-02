import { Component } from '@angular/core';
import { FirstApiService } from './first-api.service';
import axios from 'axios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  private apiUrl = 'https://bandaumnikov.ru/api/test/site/get-index';
  private headers = {
    // 'x-rapidapi-host': 'jokes-by-api-ninjas.p.rapidapi.com',
    // 'x-rapidapi-key': 'your-rapid-api-key'
  };
  getRestaurant() {
    axios.get(this.apiUrl, { headers: this.headers })
      .then(response => {
        console.log(response.data.data);
      })
      .catch(error => {
        console.error(error);
      });
  }
}
