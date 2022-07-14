import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AuthModule } from './components/auth/auth.module';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { DataModule } from './components/data/data.module';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CartComponent } from './components/products/cart/cart.component';
import { CreateComponent } from './components/products/create/create.component';
import { ListComponent } from './components/products/list/list.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductsModule } from './components/products/products.module';
import { ReviewComponent } from './components/products/review/review.component';
import { ViewComponent } from './components/products/view/view.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'products', children: [
      { path: '', component: ProductsComponent },
      { path: 'create', component: CreateComponent },
      { path: 'list', component: ListComponent },
      { path: 'cart', component: CartComponent },
      { path: 'view', component: ViewComponent },
      { path: 'review', component: ReviewComponent },
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ProductsModule, AuthModule, DataModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
