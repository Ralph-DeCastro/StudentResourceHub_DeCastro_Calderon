import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigationMenuComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './navigation/about/about.component';
import { AddResourceComponent } from './navigation/add-resource/add-resource.component';
import { CategoriesComponent } from './navigation/categories/categories.component'; 
import { HomeComponent } from './navigation/home/home.component'; 
import { ProgrammingComponent } from './navigation/categories/programming/programming.component'; 
import { DesignComponent } from './navigation/categories/design/design.component'; 
import { MathComponent } from './navigation/categories/math/math.component'; 

@NgModule({
declarations: [
AppComponent,
HeaderComponent,
NavigationMenuComponent,
FooterComponent,
AboutComponent,
AddResourceComponent,
CategoriesComponent,
HomeComponent,
DesignComponent,
MathComponent,
ProgrammingComponent

],
imports: [
BrowserModule,
AppRoutingModule,
FormsModule,
ReactiveFormsModule,
FooterComponent,
],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }