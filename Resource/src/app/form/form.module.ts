import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  // ✅ Import FormsModule
import { FormComponent } from './form.component';

@NgModule({
  declarations: [FormComponent],
  imports: [
    CommonModule,
    FormsModule  // ✅ Make sure FormsModule is here
  ],
  exports: [FormComponent]
})
export class FormModule { }
