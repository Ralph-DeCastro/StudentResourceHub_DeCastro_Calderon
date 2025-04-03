import { Component } from '@angular/core';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  resource = {
    title: 'Learning TypeScript',
    category: 'Programming',
    author: 'John Doe',
    publicationDate: 'January 15, 2023',
    description: 'This comprehensive guide to TypeScript...',
    link: 'https://example.com'
  };

  isLoading = false;

  goBack() {
    window.history.back();
  }
}

