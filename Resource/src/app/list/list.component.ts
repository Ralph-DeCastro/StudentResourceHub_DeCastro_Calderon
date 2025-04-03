import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  cardTitle: string = 'Default Title';
  cardDescription: string = 'Default Description';
  cardCategory: string = 'Default Category';

  // Example method to update card details dynamically
  updateCard(title: string, description: string, category: string) {
    this.cardTitle = title;
    this.cardDescription = description;
    this.cardCategory = category;
  }
}
