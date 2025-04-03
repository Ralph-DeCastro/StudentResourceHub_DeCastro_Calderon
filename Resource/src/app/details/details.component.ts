import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  resource: any;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    // Fetch resource details based on id
    this.resource = {
      title: 'Resources of Students ' + id,
      fullDescription: 'Studying at University of Baguio ' + id,
      category: 'Information Technology',
      url: 'http://example.com',
      author: 'DeCastro-Calderon',
      publicationDate: '2025-04-03'
    };
  }

  goBack() {
    this.router.navigate(['/resources']);
  }
}