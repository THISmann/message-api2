import { Component, Input } from '@angular/core'; 

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() card: any; // Use the appropriate type for 'card'
  @Input() defaultImageUrl: any = "../../assets/Angular.png";
}
