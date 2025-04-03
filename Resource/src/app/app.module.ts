import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // ✅ Import FormsModule

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component'; // ✅ Import FormComponent
import { CategoryComponent } from './category/category.component';
import { DetailsComponent } from './details/details.component';
import { ListComponent } from './list/list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    CategoryComponent,
    DetailsComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule  // ✅ Make sure FormsModule is here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
