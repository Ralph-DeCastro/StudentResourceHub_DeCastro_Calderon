import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  resources = [
    { title: 'Student 1: Ralph', description: 'Studying at University of Baguio', category: 'Information Technology', id: 1 },
    { title: 'Student 2: Jay Mark', description: 'Studying at University of Baguio', category: 'Computer Science', id: 2 },
    // Add more resources as needed
  ];

  constructor(private router: Router) {}

  viewDetails(resource: any) {
    this.router.navigate(['/resource', resource.id]);
  }
}