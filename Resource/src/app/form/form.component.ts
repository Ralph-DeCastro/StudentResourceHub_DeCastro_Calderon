import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  resource = {
    title: '',
    description: '',
    url: '',
    category: '',
    author: ''
  };

  categories = ['Information Technology', 'Computer Science', 'Computer Engineering']; // Example categories

  constructor(private router: Router) {}

  onSubmit() {
    // Here you would typically send the resource data to a service
    console.log('Resource added:', this.resource);
    this.router.navigate(['/resources']); // Navigate back to the resource list
  }

  onCancel() {
    this.router.navigate(['/resources']); // Navigate back to the resource list
  }
}