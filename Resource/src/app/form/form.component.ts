import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Import FormsModule

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  standalone: true,  // Make the component standalone
  imports: [FormsModule],  // Import FormsModule to use ngModel
})
export class FormComponent {
  resource = {
    title: '',
    description: '',
    url: '',
    category: '',
    author: ''
  };

  onSubmit(): void {
    console.log('Form submitted with:', this.resource);
    // Form submission logic here
  }

  onReset(): void {
    this.resource = { title: '', description: '', url: '', category: '', author: '' };
  }
}
