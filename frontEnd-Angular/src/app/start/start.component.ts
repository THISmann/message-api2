import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import axios from 'axios';
import { response } from 'express';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent {
  avrNote: number[] = [];
  //repeatCountArray: number[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id');
      
      if (id !== null) {
        const numericId = +id; // Convert the 'id' to a number 
        // Check if 'numericId' is a valid number (not NaN)
        if (!isNaN(numericId)) { 
          this.getNoteFromIdCafe(numericId);
        } else {
          console.error('Invalid ID:', id);
        }
      } else {
        console.error('ID is null');
      }
    });
  }
   
  getNoteFromIdCafe(id_cafe: number) {
    axios
      .get(`http://localhost:8888/notes-by-cafe/${id_cafe}`, {})
      .then((response) => {
      ;
        if (response.data.length >= 1) {
          this.avrNote = new Array(Math.floor(
            response.data.reduce(
              (accumulator: number, currentObject: any) => accumulator + currentObject.note,
              0
            ) / response.data.length
          ));

         //new Array()
        }
        
        console.log('AvrNote', this.avrNote); 
      })
      .catch((error) => {
        console.error('error fetch data:', error);
      });
  }
}
