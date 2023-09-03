import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import axios from 'axios';
import { response } from 'express';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {
  constructor(private route: ActivatedRoute) {}

  id_cafe: number = 0;
  messageById: any = [];
  items: string[] = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id');

      if (id !== null) {
        const numericId = +id; // Convert the 'id' to a number
        this.id_cafe = +id;
        // Check if 'numericId' is a valid number (not NaN)
        if (!isNaN(numericId)) {
          //this.getDetailById(numericId); // Call the getDetailById method with the route parameter 'id'
          this.getMessageFromIdCafe(numericId);
        } else {
          console.error('Invalid ID:', id);
        }
      } else {
        console.error('ID is null');
      }
    });
  }

  getMessageFromIdCafe(id_cafe: number) {
    axios
      .get(`http://localhost:8888/messages-by-cafe/${id_cafe}`, {
        // params
      })
      .then((response) => {
        this.messageById = response.data;
        console.log(this.messageById);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }

}
