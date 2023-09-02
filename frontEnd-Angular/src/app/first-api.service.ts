import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class FirstApiService {

  constructor() { }

  getRandomRestaurant() {
    return axios.get('https://bandaumnikov.ru/api/test/site/get-index', {
      headers: {
        // 'x-rapidapi-host': 'jokes-by-api-ninjas.p.rapidapi.com',
        // 'x-rapidapi-key': 'your-rapid-api-key'
      }
    });
  }
}

