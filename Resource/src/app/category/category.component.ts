import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category',
  imports:[CommonModule],
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  // Example data for categories and resources
  webDevCategory = {
    title: 'Web Development',
    description: 'Resources for learning and improving web development skills.',
    resources: [
      { name: 'MDN Web Docs', url: 'https://developer.mozilla.org/' },
      { name: 'CSS Tricks', url: 'https://css-tricks.com/' },
      { name: 'Frontend Masters', url: 'https://frontendmasters.com/' }
    ]
  };

  dataScienceCategory = {
    title: 'Data Science',
    description: 'Resources for learning data analysis, machine learning, and AI.',
    resources: [
      { name: 'Kaggle', url: 'https://www.kaggle.com/' },
      { name: 'Towards Data Science', url: 'https://towardsdatascience.com/' },
      { name: 'DataCamp', url: 'https://www.datacamp.com/' }
    ]
  };

  designCategory = {
    title: 'Design',
    description: 'Resources for UI/UX and graphic design.',
    resources: [
      { name: 'Behance', url: 'https://www.behance.net/' },
      { name: 'Dribbble', url: 'https://dribbble.com/' },
      { name: 'Canva', url: 'https://www.canva.com/' }
    ]
  };

  isButtonDisabled = false;  // Property for disabling button
  imageUrl = 'https://example.com/image.jpg';  // Property for binding image URL

  onButtonClick() {
    alert('Button clicked!');
  }
}
