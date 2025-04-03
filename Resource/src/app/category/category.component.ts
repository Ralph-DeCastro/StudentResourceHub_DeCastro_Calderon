import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category',
  imports: [CommonModule],
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  category = {
    title: 'Information Technology',
    description: 'Ralph Vincent De Castro',
    resources: [
      { title: 'Resource 1', description: 'Studying at University of Baguio', id: 1 },
      { title: 'Resource 2', description: 'Studying at University of Baguio', id: 2 }
    ]
  };

  constructor(private router: Router) {}

  viewDetails(resource: any) {
    this.router.navigate(['/resource', resource.id]);
  }
}