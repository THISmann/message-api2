import { Component, OnInit ,Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import axios from 'axios';
import { response } from 'express';  
import { MessagesComponent } from '../messages/messages.component';
import { StartComponent } from '../start/start.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  @ViewChild(MessagesComponent) messagesComponent: MessagesComponent;
  @ViewChild(StartComponent) startComponent : StartComponent;
  constructor(private route: ActivatedRoute) {}

  details: any = {};
  message_text: string = '';
  message: any = {};
  //@Output() messageEvent = new EventEmitter<string>();

  id_cafe: number = 0;
  note: string = '';
  //messageById: any = [];
  //restaurantId: string;
  private apiUrl = 'https://bandaumnikov.ru/api/test/site/get-view?id=';
  // `https://bandaumnikov.ru/api/test/site/get-view?id=${itemId}`
  private headers = {
    // 'x-rapidapi-host': 'jokes-by-api-ninjas.p.rapidapi.com',
    // 'x-rapidapi-key': 'your-rapid-api-key'
  };

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id');

      if (id !== null) {
        const numericId = +id; // Convert the 'id' to a number
        this.id_cafe = +id;
        // Check if 'numericId' is a valid number (not NaN)
        if (!isNaN(numericId)) {
          this.getDetailById(numericId); // Call the getDetailById method with the route parameter 'id'
          //this.getNoteFromIdCafe(numericId);
        } else {
          console.error('Invalid ID:', id);
        }
      } else {
        console.error('ID is null');
      }
    });
  }

  // Get Restaurant information
  getDetailById(id: number): void {
    axios
      .get(`https://bandaumnikov.ru/api/test/site/get-view?id=${id}`, {
        headers: this.headers,
      })
      .then((response) => {
        console.log(response.data.data);
        this.details = response.data.data;
        //\\console.log(typeof response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  // Post a Note to the Api
  postNote(): void {
    axios
      .post(
        'http://localhost:8888/notes',
        {
          note: this.note,
          id_cafe: this.id_cafe,
        },
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      )
      .then((response) => {
        //
        this.startComponent.getNoteFromIdCafe(this.id_cafe);
        console.log(response.data);
        console.log(this.note);
      })
      .catch((error) => {
        console.error('Error posting data:', error);
      });
    console.log(this.note, this.id_cafe);
  }

  // Post Message to the Api
  postMessage(): void {
    axios
      .post(
        'http://localhost:8888/messages',
        {
          text: this.message_text,
          id_cafe: this.id_cafe,
        },
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      )
      .then((response) => {
        this.message = response.data
        console.log('response',response.data);
        
        // getMessage from other components
        this.messagesComponent.getMessageFromIdCafe(this.id_cafe);
        // emit event
        // this.messageEvent.emit(this.message);
        //this.messageById = [...this.messageById, response.data];
        this.message_text = '';
      })
      .catch((error) => {
        console.error('Error posting data:', error);
      });
    console.log(typeof this.id_cafe);
  }

  // Share data on Telegram
  generateTelegramShareLink(): string {
    const text = `"address:"${this.details.address}`;
    const url = `https://telegram.me/share/url?url=${encodeURIComponent(text)}`;
    return url;
  }
}
