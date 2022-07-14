import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { CartComponent } from './cart/cart.component';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { ReviewComponent } from './review/review.component';
import { ViewComponent } from './view/view.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductsComponent,
    CartComponent,
    CreateComponent,
    ListComponent,
    ReviewComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule

  ]
})
export class ProductsModule { }
