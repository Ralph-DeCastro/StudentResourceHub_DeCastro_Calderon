import { Routes } from '@angular/router';
import { HomeComponent } from './navigation/home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './navigation/about/about.component';
import { AddResourceComponent } from './navigation/add-resource/add-resource.component';
import { MathComponent } from './navigation/categories/math/math.component';
import { DesignComponent } from './navigation/categories/design/design.component';
import { ProgrammingComponent } from './navigation/categories/programming/programming.component';
import { CategoriesComponent } from './navigation/categories/categories.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '/', component: HomeComponent },
    { path: '/categories', component: CategoriesComponent, children: [
      {path: '/categories/programming', component: ProgrammingComponent},
      {path: '/categories/design', component: DesignComponent},
      {path: '/categories/math', component: MathComponent},
    ]},
    { path: '/about', component: AboutComponent
 },
    { path: '/add-resource', component: AddResourceComponent },

  ];