import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { CategoryComponent } from './category/category.component';
import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListComponent, DetailsComponent,CategoryComponent, FormComponent, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'GridList';
}
