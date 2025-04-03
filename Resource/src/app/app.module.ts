import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component'; // Adjust the path as necessary

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    FormsModule// Declare your FormComponent here
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FormComponent // Add FormsModule to imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }