import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyComponent } from './property/property.component';
import { ClassbindComponent } from './classbind/classbind.component';
import { EventbindComponent } from './eventbind/eventbind.component';
import { StylebindComponent } from './stylebind/stylebind.component';
import { OnewayComponent } from './oneway/oneway.component';
import { TwowayComponent } from './twoway/twoway.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PropertyComponent,
    ClassbindComponent,
    EventbindComponent,
    StylebindComponent,
    OnewayComponent,
    TwowayComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DataModule { }
