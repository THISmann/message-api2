import { Component, OnInit , Input , Output , EventEmitter } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import axios from 'axios';
import { response } from 'express'; 

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {
  @Input() message: any = {};
  id_cafe: number = 0;
  messageById: any = [];

  //@Output() messageEvent = new EventEmitter<object>();


  constructor(private route: ActivatedRoute) {}

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

  // Get All messages from a specifique id
  getMessageFromIdCafe(id_cafe: number) {
    axios
      .get(`http://localhost:8888/messages-by-cafe/${id_cafe}`, {
        // params
      })
      .then((response) => {
        this.messageById = response.data;
        console.log(this.messageById);
        this.messageById = [...this.messageById, this.message]
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }

}
